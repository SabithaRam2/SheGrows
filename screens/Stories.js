
import React, { useEffect, useState } from 'react';
 
import{ StyleSheet,
		Text,
		View,
		FlatList,
	} from 'react-native';
  var axios = require("axios").default;
  

const DATA = [
{
	id:"1",
	title:"Aditya Birla Sun Life Tax Relief 96",
  desc:"Debt –Long-Term Government fund"
},
{
	id:"2",
	title:"Axis Long Term Equity Fund",
  desc:"dsfj"
},
{
	id:"3",
	title:"DSP Tax Saver Fund",
  desc:"jga"
}
];

const Item = ({title,Scode}) => {
return(
	<View style={styles.item}>
	<Text>Story :  {Scode}</Text>
	</View>
);
}

export default function Story() {

    const [resdata,setData]=React.useState();

const renderItem = ({item})=>(
    
<Item title={item["id"]}  Scode={item["description"]}/>
    
    
  
);

useEffect(() => {
    axios.get('https://opensea-data-query.p.rapidapi.com/api/v1/assets',{
        params: {
            collection: "ongakucraft",
            order_direction: "desc",
            limit: 20,
            offset: 0,
         },
         headers: {
                    'x-rapidapi-host': 'opensea-data-query.p.rapidapi.com',
                    'x-rapidapi-key': 'bf8ec4cd53msh1407ae77d63ad9ap1326a2jsn8a24414af201'
                  }
      })
        .then((res) => {
            setData( res.data.assets)
         console.log( res.data.assets);
          
        })
}),[] 
return (
<View style={styles.container}>
<Text style={styles.headline}>Success Stories</Text>
	<FlatList
	data={resdata}
	renderItem={renderItem}
	keyExtractor={item => item.id}
	/>
</View>
);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFD580',
		marginTop:30,
		padding:2,
},
item: {
		backgroundColor: '#0C92AF',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
},
headline: {
textAlign: 'center', // <-- the magic
fontWeight: 'bold',
fontSize: 18,
marginTop: 0,
backgroundColor: 'pink',
}
}); 
 
