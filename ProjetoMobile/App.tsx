import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./css/Styles";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Cadastro from "./screens/Cadastro";
import Detalhe from "./screens/Detalhe";
import Pagamento from "./screens/Pagamento";
import AtualizarSenha from "./screens/AtualizarSenha";

const Pilha = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen
          name="Login" component={Login}  options={{ headerShown: false }}
        />
        <Pilha.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Pilha.Screen name="Cadastro" component={Cadastro} />
        <Pilha.Screen name="Detalhe" component={Detalhe} />
        <Pilha.Screen name="Pagamento" component={Pagamento}/>
        <Pilha.Screen name="AtualizarSenha" component={AtualizarSenha}/>
      </Pilha.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
