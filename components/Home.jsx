import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { findItems, findByCategory } from '../redux/items_redux/itemActions';
import { Dropdown } from 'react-native-element-dropdown';

const style = StyleSheet.create({
  container:{
        padding: 20,
        backgroundColor: '#F1F0F2'
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemView:{
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
  },
  elevation: {
  elevation: 20,
  shadowColor: '#52006A',
},
dropdown: {
  margin: 16,
  height: 50,
  borderBottomColor: 'gray',
  borderBottomWidth: 0.5,
},
icon: {
  marginRight: 5,
},
placeholderStyle: {
  fontSize: 16,
},
selectedTextStyle: {
  fontSize: 20,
},
iconStyle: {
  width: 20,
  height: 20,
},
inputSearchStyle: {
  height: 40,
  fontSize: 16,
},
})

function Home({navigation}) {

  const data = [
    { label: "Men's", value: "men's clothing" },
    { label: 'jewelery', value: 'jewelery' },
    { label: 'electronics', value: 'electronics' }
  ];

  const [value, setValue] = useState(null);

  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);


  useEffect(() => {

  async function getItems() {
    await dispatch(findItems());
    setLoading(false);
  }

  getItems();

}, []);

async function categoryCall(category) {

setLoading(true);
await dispatch(findByCategory(category));
setLoading(false)

}



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


     <Dropdown
       style={style.dropdown}
       placeholderStyle={style.placeholderStyle}
       selectedTextStyle={style.selectedTextStyle}
       inputSearchStyle={style.inputSearchStyle}
       iconStyle={style.iconStyle}
       data={data}
       search
       maxHeight={300}
       labelField="label"
       valueField="value"
       placeholder="Select Category"
       searchPlaceholder="Search..."
       value={value}
       onChange={item => {
         setValue(item.value);
         categoryCall(item.value)
       }}
     />



    <ScrollView>

    {state.items.map((item)=>{
      return (
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('ITEM', {id: item.id})}>
        <View style={[style.itemView, style.elevation]} >

        <View style={{flex: 1}}>
        <Image source={{uri: item.image}}  style={{width: 90, height: 90}} />
        </View>

        <View style={{paddingLeft: 10, flex: 2}}>
        <Text style={style.text}>{item.title}</Text>

        <View style={{flexDirection: 'row', fontSize: 18, paddingTop: 10, justifyContent: 'space-around'}}>
        <Text style={{fontSize: 18}}>${item.price}</Text>
        <Text style={{fontSize: 18}}>rating: {item.rating.rate}</Text>
        </View>

        </View>

        </View>
        </TouchableOpacity>
      )
    })}

    </ScrollView>
    </View>
    </>
  )
}

}

export default Home;
