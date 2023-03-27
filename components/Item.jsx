import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { findSingleItem } from '../redux/items_redux/itemActions';

const style = StyleSheet.create({
  container:{
        padding: 20,
        backgroundColor: '#F1F0F2'
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  itemView:{
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F2F2F2'
  },
  elevation: {
  elevation: 20,
  shadowColor: '#52006A',
},
titleText:{
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 10,
  marginBottom: 10
},
descriptionText:{
  fontSize: 18,
}
})

function Item({navigation, route}) {

  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const itemId = route.params.id;


  useEffect(() => {

  async function getItem() {
    await dispatch(findSingleItem(itemId));
    setLoading(false);
  }

  getItem();

}, []);



if(loading){
  return (
    <>
    <Text> Loading.... </Text>
    </>
  )
}else{
  return (
    <>
    <View style={style.container}>
    <ScrollView>

    <View style={[style.itemView, style.elevation]}>
    <Image source={{uri: state.singleItem.image}}  style={{width: 250, height: 250}} />

    <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10}}>
    <Text style={style.text}>${state.singleItem.price}</Text>
    <Text style={style.text}>{state.singleItem.rating.rate}⭐</Text>
    </View>
    </View>



    <View>
    <Text style={style.titleText}>{state.singleItem.title}</Text>

    <Text style={style.descriptionText}>{state.singleItem.description}</Text>
    </View>


    </ScrollView>
    </View>
    </>
  )
}

}

export default Item;
