import React, { useEffect, useState } from 'react';
 
import{ StyleSheet,
                        Text,
                        View,
                        FlatList,
            } from 'react-native';
  var axios = require("axios").default;
  
 
const Item = ({title,Scode}) => {
return(
            <View style={styles.item}>
            <Text>Blog: {Scode}</Text>
            </View>
);
}
 
export default function Blogs() {
 
    const [resdata,setData]=React.useState();
 
const renderItem = ({item})=>(
    
<Item title={item["owned_asset_count"]}  Scode={item["description"]} />    
  
);
 
useEffect(() => {
    axios.get('https://opensea-data-query.p.rapidapi.com/api/v1/collections',{
        params: {
            asset_owner: "0x2bf699087a0d1d67519ba86f960fecd80d59c4d7",
            offset: 0,
            limit: 20
         },
         headers: {
                    'x-rapidapi-host': 'opensea-data-query.p.rapidapi.com',
                    'x-rapidapi-key': 'bf8ec4cd53msh1407ae77d63ad9ap1326a2jsn8a24414af201'
                  }
      })
        .then((res) => {
            setData(res.data)
         console.log(res.data);
          
        })
}),[] 
return (
<View style={styles.container}>
<Text style={styles.headline}>Blogs From Pioneers</Text>
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
