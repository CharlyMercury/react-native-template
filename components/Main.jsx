import { AnimatedIotCard } from "./IotCard";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { getIots } from "../lib/iot";
import { FlatList } from "react-native";
import { ScreenTemplate } from "./ScreenTemplate";

export function Main() {
  const [iots, setIots] = useState([]);

  useEffect(() => {
    getIots().then((iots) => {
      setIots(iots);
    });
  }, []);

  return (
    <ScreenTemplate>
      {iots.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          className=""
          data={iots}
          keyExtractor={(iot) => iot.slug}
          renderItem={({ item, index }) => (
            <AnimatedIotCard iot={item} index={index} />
          )}
        />
      )}
    </ScreenTemplate>
  );
}
