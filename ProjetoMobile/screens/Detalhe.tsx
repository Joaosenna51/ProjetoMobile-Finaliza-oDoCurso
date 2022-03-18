import * as React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import { styles } from '../css/Styles';

export default function Detalhe({route,navigation}){

    const{dados} = route.params;
    const{idusuario} = route.params;
    console.log(`Detalhes -> ${idusuario}`);
    return(
        <View style={styles.container}>
           
           <ScrollView horizontal={true} style={styles.scrollviewdetalhe}>

               <View style={styles.grupoimgdetalhe}>
                   <Image source={{uri:`${dados.foto1}`}} style={styles.imgdetalhe}/>
                   <Image source={{uri:`${dados.foto2}`}} style={styles.imgdetalhe}/>
                   <Image source={{uri:`${dados.foto3}`}} style={styles.imgdetalhe}/>
               </View>
           </ScrollView>

           <View style={styles.infoproduto}>
               <Text style={styles.nomeproduto}>{dados.nomeproduto}</Text>
               <Text style={styles.nomeproduto}>{dados.descricao}</Text>
               <Text style={styles.preco}>R$ {dados.preco}</Text>
           </View>
           <View>
               <TouchableOpacity style={styles.btncomprar} onPress={()=>{navigation.navigate("Pagamento",{produto:dados,idusuario:idusuario})}}>  
                   <Text style={styles.txtbtncomprar}> Ir para pagamento </Text>
               </TouchableOpacity>
           </View>
        </View>
    )
}