<template>
  <table>
    <thead>
    <tr>
      <th v-for="column in this.columnNames">{{column}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(user, uid) in users">
      <td>{{user.name}}</td>
      <td v-for="friend in friends(user.friends)">{{friend.name}} - {{friend.department}}</td>
      <td>
        <toggle-button @change="approveToggle(uid, $event)" :value="user.approved" color="#82C7EB" :sync="true"
                       :labels="{checked: '승인됨', unchecked: '승인필요'}" :width="75" :height="30"></toggle-button>
      </td>
      <td>
        <img src="../assets/edit-button.png" class="comment-button" @click="editComment(uid, user.comment)"></img>
        {{user.comment}}
      </td>
    </tr>
    <section v-show="showCommentBox" class="comment-area" >
      <textarea class="comment-text"></textarea>
      <button @click="saveComment">저장</button>
      <button @click="showCommentBox=false">닫기</button>
    </section>
    </tbody>
  </table>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: "admin",
    data() {
      return {
        users: {},
        keys: [],
        columnNames: ['NAME', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'APPROVED', 'COMMENT'],
        showCommentBox: false
      }
    },
    methods: {
      readData() {
        const _this = this

        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            console.log("user logged in")
            var userData = firebase.database().ref();

            userData.on('value', function (snapshot) {
              console.log("---data received---")
              _this.users = snapshot.val()
            });
          }
        })
      },

      friends(userFriend) {
        let friendList = []
        if (!userFriend) {
          let friendCount = 0
          while (friendCount !== 10) {
            friendList.push({name: '', department: ''})
            friendCount++
          }
        } else {
          friendList = Object.values(userFriend)
          let friendCount = friendList.length
          while (friendCount !== 10) {
            friendList.push({name: '', department: ''})
            friendCount++
          }
        }
        return friendList
      },

      approveToggle(uid, event) {
        var updates = {}
        updates['/approved'] = event.value

        firebase.database().ref(uid).update(updates)
      },

      editComment(uid, comment) {
        document.getElementsByTagName('section')[0].dataset.uid = uid
        document.getElementsByTagName('textArea')[0].value = comment
        this.showCommentBox = true
      },

      saveComment() {
        const uid = document.getElementsByTagName('section')[0].dataset.uid
        const comment = document.getElementsByTagName('textArea')[0].value

        var updates = {}
        updates['/comment'] = comment

        firebase.database().ref(uid).update(updates)
        this.showCommentBox = false
      }
    },

    beforeMount() {
      this.readData()
    }
  }
</script>

<style scoped>
  body {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 14px;
    color: #444;
  }

  table {
    border: 0;
    border-radius: 3px;
    background-color: #fff;
  }

  th {
    background-color: #58A0C9;
    color: rgba(255, 255, 255, 0.66);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  tbody > tr {
    background-color: #F7F7F7;
  }

  th, td {
    min-width: 70px;
    padding: 5px 20px;
  }

  tbody > tr:hover {
    background-color: #E1E1E1;
  }

  img {
    padding-right : 10px;
  }

  .comment-area {
    position: fixed;
    display: flex;

    top: 35%;
    left: 35%;
    width: 30%;
    height: 30%;
  }

  textarea {
    width: 100%;
    font-size : 16px;
  }

</style>
