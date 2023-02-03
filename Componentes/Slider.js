import React,{useState}  from "react";
import Slider from "@react-native-community/slider";
import { Text} from 'react-native';

export default function SliderRange() {

    const [Valor,setSlider] = useState(1)

    return(
        <> 
            <Slider
            style={{width:'100%',height:40}}
            minimumValue={1}
            maximumValue={9}
            step={1}
            onValueChange={value => setSlider(value)}
            />

            <Text>{Valor}</Text>
        </>
    )
}
