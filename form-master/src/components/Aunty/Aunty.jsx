import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h3>Aunty</h3>
            <section className="flex">
                <Cousin name={'Adrika'}></Cousin>
                <Cousin name={'Juthi'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 10000)}>Add 10000 tk</button>
        </div>
    );
};

export default Aunty;