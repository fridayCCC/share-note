import { chatStore } from "@/store/chat";
import { useState, useEffect } from "react";
import FirstPerson from "./firstPerson";
import SecondPerson from "./secondPerson";

type IOrder = "first" | "second";
const orderList: IOrder[] = ["first", "second"];
function Switcher() {
  const [order, setOrder] = useState<IOrder>("first");
  const [chatState, setChatState] = useState(chatStore.initialState);

  useEffect(() => {
    chatStore.subscribe(setChatState);
    chatStore.init();
  }, []);

  return (
    <section>
      <div className="switcher-div">
        {orderList.map((val, idx) => {
          const pointColor = idx == 1 ? "#00ade7" : "#06c406";
          return (
            <div
              key={val}
              style={{
                border: val === order ? `2px solid ${pointColor}` : "",
                padding: 0,
                borderRadius: 30,
              }}
              onClick={() => setOrder(idx == 1 ? "second" : "first")}
            >
              <button className="switcher">Person {idx}</button>
            </div>
          );
        })}
      </div>
      <div>
        {order === "first" && <FirstPerson />}
        {order === "second" && <SecondPerson />}
      </div>
    </section>
  );
}
export default Switcher;
