import React, {PropTypes, Component} from 'react';
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  View
} from 'react-native';

import { Container } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons';


import { PostConnectBox, PostRatingBox, PostAddButton, PostTextBox } from './components'




const showDetail = (navigate,showPostDetail,postId) => {
  navigate({routeName: 'ThreadDetailViewContainer'})
  showPostDetail(postId)
}
// const colors = ['#7cdbd5','#f53240','#f9be02']
// const colors = ['#4abdac','#fc4a1a','#f7b733','#dfdce3']
// const colors = ['#945d60','#626e60','#af473c','#3c3c3c']
const colors = ['#e37222','#07889b','#66b9bf','#eeaa7b']
// const colors = ['#6e3667','#88d317','#66b9bf','#eeaa7b']
// const colors = ['#6e3667','#88d317','#1a0315','#535353']

const renderPosts = (posts,connectWithUser,ratePostUp, ratePostDown,showPostDetail,navigate) => {
  var i = 0
  return posts.map( post => {
    //TODO should be done better
    const postId = post.get('id')
    i++
    if (i == 4 ) {
      i = 0
    }
    return (
        <TouchableOpacity
          style={[styles.container,{backgroundColor:colors[i]}]}
          key={post.get('id')}
          onPress={() => showDetail(navigate,showPostDetail,postId)}
          >
            <PostTextBox key="jo" >
            {post}
            </PostTextBox>
            <PostRatingBox key="nö" style={styles.postRatingContainer}
            ratePostUp={() => ratePostUp()}
            ratePostDown={() => ratePostDown()}
            connectWithUser={() => connectWithUser()}
            >
              {post}
            </PostRatingBox>
        </TouchableOpacity>
    )
  })
}

const ThreadView = (props) => {
  const {
      connectWithUser,
      ratePostUp,
      ratePostDown,
      addNewPost,
      showPostDetail,
      navigate,
      reset
    } = props
    return (
      <Container>
          <ScrollView>
            {renderPosts(props.posts,connectWithUser,ratePostUp,ratePostDown,showPostDetail,navigate)}
          </ScrollView>
          <PostAddButton
          addNewPost={() => addNewPost()}
          />
      </Container>
    )
}

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  userProfilePhoto: {
    ...circle,
    alignSelf: 'center'
  },
  counterButton: {
    ...circle,
    backgroundColor: '#349d4a',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  counter: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  welcome: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
    padding: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
});
var styles = StyleSheet.create({
  container: {
    padding : 15,
    marginBottom :6,
    flexDirection : 'row'
  },
  postTextContainer : {
    flex : 4
  },
  postText : {
    fontSize: 54,
    color: 'white',
  },
  postRatingContainer : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center'
  },
  postRatingButtons : {
    fontSize : 50,
    color : '#4F8EF7'
  },
  postRatingValue : {
    fontSize : 30,
    color : '#4F8EF7'
  },
  postReplyContainer : {
    flexDirection : 'column',
  },
  postReplyIcon : {
    fontSize : 10,
  },
  postReplyNumber : {
    fontSize : 10,
  }
});

export default ThreadView;
