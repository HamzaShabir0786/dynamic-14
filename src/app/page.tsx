import client from "../sanity/lib/client";
let getdata = async () => {
  let res = await client.fetch(
    `*[_type == "product"]{product_name, product_price}`
  );
  console.log("here is  my data", res);
  return res;
};
interface apitype {
  product_name: string;
  product_price: number;
}
export default async function Home() {
  let data = await getdata();
  return (
    <>
      <div className="flex flex-col justify-center items-center  h-[90vh]">
        {data.map((item: apitype, index: number) => {
          return (
            <div key={index}>
              <h1>
                Today's best product is "{item.product_name}" it help us for our
                mental health
              </h1>
              <h1>Its price is {item.product_price}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}
