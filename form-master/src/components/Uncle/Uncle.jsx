import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className="flex">
                <Cousin name={'Sanju'} asset={asset}></Cousin>
                <Cousin name={'Ria'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;