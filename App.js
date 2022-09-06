import React from "react";
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, Dimensions} from 'react-native';
import mainImage from "./assets/main.png";
import conimg from "./assets/pizza.png";


export default function App() {
  return (
    <ScrollView style = {styles.container}>
      <StatusBar style="light-content" backgroundColor="black" />
        <View style = {styles.upperContainer}>
          <View style = {styles.titleContainer}>
            <Text style = {styles.menuTextStyle}>
              나만의 꿀팁
            </Text>
          </View>
          <View style = {styles.mainImageContainer}>
            <Image source={mainImage} style={styles.mainImageStyle} />
          </View>

        </View>

        <View style = {styles.lowerContainer}>
          <ScrollView horizontal={true} style = {styles.sortingScroll}>
            <TouchableOpacity style = {styles.scrollContainer1}>
              <Text style = {styles.textStyle}>미용</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.scrollContainer2}>
              <Text style = {styles.textStyle}>재테크</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.scrollContainer3}>
              <Text style = {styles.textStyle}>반려견</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.scrollContainer4}>
              <Text style = {styles.textStyle}>꿀팁 찜</Text>
            </TouchableOpacity>  
          </ScrollView>

          <View style = {styles.contentContainer}>
            <View style = {styles.contentImage}>
             <Image source = {conimg} style = {styles.imageOpt}/>

            </View>
            <View style = {styles.contentText}>
              <Text style ={{fontWeight:"bold"}}>먹다 남은 피자를 촉촉하게!</Text>
              <Text numberOfLines={3}>먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
              <Text style = {styles.date}>2020.09.09</Text>
            </View>
          </View>
        </View>
    </ScrollView>

  );

}
let screenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //marginTop: 30,
  },
  upperContainer: {
    flex:4,
  },
  lowerContainer: {
    flex:6,
  },
  titleContainer: {
    flex:1,
    justifyContent:"flex-end",
    margin:10
  },
  mainImageContainer: {
    flex:4,
    alignItems:"center",
    justifyContent:"flex-start",
    margin:10,
  },
  sortingScroll: {    
    margin:10,
    flex:1
  },
  contentContainer: {
    margin:10,
    flex:6,
    flexDirection:'row'
  },
  contentImage:{
    flex:2,
  },
  contentText:{
    flex:5,
  },

  menuTextStyle: {
    fontSize:20,
    fontWeight:'700'
  },
  scrollContainer1:{
    height: 40,
    width: 80,
    margin:5,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#E9967A'
    
  },
  scrollContainer2:{
    height: 40,
    width: 80,
    margin:5,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#FFD700'
  },
  scrollContainer3:{
    height: 40,
    width: 80,
    margin:5,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#AFEEEE'
  },
  scrollContainer4:{
    height: 40,
    width: 80,
    margin:5,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: '#F08080'
  },
  mainImageStyle:{
    width:340,
    height:200,
    resizeMode: 'contain',
    borderRadius:20,

  },
  textStyle:{
    textAlign:"center",
    fontSize:15,
    fontWeight:'500',
    color:'#ffffff'

  },
  imageOpt:{
    width:90,
    height:90,
    borderRadius:10,
  },
  date:{
    fontSize:10,
    color: "#B0C4DE"
  }





})
