import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

import { LinearGradient } from 'expo-linear-gradient';

import {  useFonts, Inter_500Black } from '@expo-google-fonts/inter';


const width=Dimensions.get('window').width

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const News = () => {


  let [fontsLoaded] = useFonts({
    Inter_500Black,
  });

  const data=[
    { id: 1, title: "business" },
    { id: 2, title: "entertainment" },
    { id: 3, title: "general" },
    { id: 4, title: "health" },
    { id: 5, title: "science" },
    { id: 6, title: "sports" },
    { id: 7, title: "technology" },
  ]

  const dataa = [
    {
      title: "Society-wide discussion for work culture growth and productivity!",
      body: "Society-wide discussion for work culture growth and productivity! The first round of Facilitative Trainer Training Forum organized by the Ministry of Labor and Skills for the community-wide discussion at all levels has started in Jimma city. The forum will be held for two consecutive days and more than 400 trainees from Oromia, Gambella and Southwest Ethiopia regions are participating.",
      imgUrl: "https://mols.gov.et/wp-content/uploads/2024/01/417440228_675289001451640_2801008880534123912_n.jpg",
    },
    {
      title: "Job creation activities being carried out by Jimma city",
      body: "Honorable Mrs. Mufarihat Kamil, Minister of Labor and Skills, visited the job creation activities that are being carried out by Jimma city administration. Society-wide discussion for work culture growth and productivity! Along with the ongoing community-wide dialogue and the training of facilitators, the city government visited the work being done in terms of job creation. During the visit, the Honorable Mrs. Muferihat Kamil, the Minister of Labor and Skills, and Mr. Eba Gerba, the head of the Job Creation and Skills Bureau of the Oromia National Regional Government, were present. ",
      imgUrl: "https://mols.gov.et/wp-content/uploads/2024/01/417396658_675441974769676_9006086461426893329_n.jpg",
    },
    {
      title: "From various media outlets...",
      body: "Officials and experts from various media institutions visited the Federal Technical and Vocational Training Institute. During their visit, they toured the unique and internationally recognized welding excellence center in East Africa and the technologies developed by the institute and our work activities. The media officials expressed that they were satisfied with their visit and the works they saw and that they will continue to do media and communication activities to bring about cultural change in the matter.",
      imgUrl: "https://mols.gov.et/wp-content/uploads/2024/01/416033980_671347268512480_6817299699253795676_n-1024x682.jpg",
    },
  ];
  const isCarousel = React.useRef(null)


  return (
    <View style={{flex:1}} >


<View >
        <Text
          style={{
          fontWeight:'bold',
          fontSize:30,
          marginTop:10,
          marginLeft:26,
          color:'royalblue'
          }}
        >
        All News
        </Text>
      </View>

<View >
        <Text
          style={{
          fontSize:20,
          marginTop:5,
          marginLeft:26,
          color:'#999'
          }}
        >
      Labor and skill focus News
        </Text>
      </View>

     


<Carousel
        
        ref={isCarousel}
        data={dataa}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.container} key={index}>
              <Image
                source={{ uri: item.imgUrl }}
                style={styles.image}
              />
              <Text style={styles.header}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          )}}
          layout={'default'}
          firstItem={1}
          inactiveSlideScale={0.86}
          inactiveSlideOpacity={0.6}
          sliderWidth={width}
          itemWidth={width * 0.8}
          slideStyle={{ display: "flex", alignItems: "center" }}
      />


<View >
        <Text
          style={{
          fontSize:20,
          marginVertical:8,
          marginLeft:26,
          color:'royalblue',
          fontWeight:'900'
          }}
        >
      Recommended News
        </Text>
      </View>



<ScrollView showsHorizontalScrollIndicator={false}  showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 ,  }} style={{flex:1}} horizontal={false}  >

<LinearGradient
  // Button Linear Gradient
  colors={['lightcyan', 'lightblue']}
  style={{elevation:20,width:width-40,borderRadius:10,marginLeft:26,marginVertical:5,flexDirection:'row'}}
  >


<Image style={{height:90,width:80}} source={{uri:'https://mols.gov.et/wp-content/uploads/2024/01/414484095_670411771939363_778485123596662036_n.jpg'}}/>

<View style={{flexDirection:'column',flexShrink: 1,}}>

  <Text style={{fontSize:13,color:'#000',fontWeight:'bold',marginLeft:10,marginTop:4}}>
  Technical and vocational institutions
  </Text>

  <Text style={{fontSize:12,color:'#48304D' ,marginLeft:10,marginTop:2,fontFamily: 'Roboto',}}>
  We are working hard to enable technical and vocational institutions ..... see more at https://mols.gov.et/ .
  </Text>

</View>


</LinearGradient>

<LinearGradient
  // Button Linear Gradient
  colors={['lightcyan', 'lightblue']}
  style={{elevation:20,width:width-40,borderRadius:10,marginLeft:26,marginVertical:5,flexDirection:'row'}}
  >

<Image style={{height:'100%',width:80}} source={{uri:'https://mols.gov.et/wp-content/uploads/2024/01/415620721_900590278364459_116221742414398658_n-1024x682.jpg'}}/>

<View style={{flexDirection:'column',flexShrink: 1,}}>

  <Text style={{fontSize:13,color:'#000',fontWeight:'bold',marginLeft:10,marginTop:4}}>
  An integrated coalition of stakeholders
  </Text>

  <Text style={{fontSize:12,color:'#48304D' ,marginLeft:10,marginTop:2,fontFamily: 'Roboto',}}>
  An integrated coalition of stakeholders... for greater success! We evaluated the performance of the month ..... see more at https://mols.gov.et/ .
  </Text>

</View>

</LinearGradient>

<LinearGradient
  // Button Linear Gradient
  colors={['lightcyan', 'lightblue']}
  style={{elevation:20,width:width-40,borderRadius:10,marginLeft:26,marginVertical:5,flexDirection:'row'}}
  >

<Image style={{height:'100%',width:80}} source={{uri:'https://mols.gov.et/wp-content/uploads/2024/01/414460855_669179918729215_1834437486832603313_n.jpg'}}/>

<View style={{flexDirection:'column',flexShrink: 1,}}>

  <Text style={{fontSize:13,color:'#000',fontWeight:'bold',marginLeft:10,marginTop:4}}>
  Program for many social
  </Text>

  <Text style={{fontSize:12,color:'#48304D' ,marginLeft:10,marginTop:2,fontFamily: 'Roboto',}}>
  The program has a significant contribution in terms of saving the lives of young people who are vulnerable to many socio-economic problems. ..... see more at https://mols.gov.et/ .
  </Text>

</View>

</LinearGradient>


        
</ScrollView>
  


    </View>
  )
}

export default News

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 15,
    marginTop:10,
    marginBottom:-200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
     
  },
  image: {
    width: ITEM_WIDTH,
    height: 150,
  },
  header: {
    color: "#222",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom:5
  },
  body: {
    color: "#222",
    fontSize: 12,
    paddingLeft: 20,
    paddingRight: 20,
    
  }
})