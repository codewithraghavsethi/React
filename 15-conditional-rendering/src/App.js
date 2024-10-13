import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [show, setShow] = useState(false);
  return (
    <div className="App">
     <button onClick={()=>setShow(!show)}>
      {(show)?"Hide":"Show"}
     </button>
     <div>
      {(show) ? "Hello World" : ""}
     </div>
     <div>
      {(show) ? "Hello World Raghav" : ""}
     </div>
     <div>
      {(show) ? <Card></Card> : ""}
     </div>
    </div>
  );
}

export default App;


let Card = () => {
  return(
    <div>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse facilis voluptate tempora minus optio, harum enim ipsa! Nobis dolore repellendus eaque ex deserunt, quia modi. Maiores adipisci ipsum laborum error? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias magnam error ad animi corrupti sint non, vitae nihil repudiandae perferendis blanditiis eaque impedit quibusdam quos! Ut voluptas exercitationem neque numquam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, repellendus delectus. Magnam qui dolor dolorum facere illum culpa voluptas autem, amet voluptatem ducimus consequatur harum accusamus eum quia, commodi dignissimos. Consectetur magnam, velit excepturi maxime sunt autem? Aliquid, accusantium quisquam temporibus beatae officiis quis! Maxime animi voluptatibus ullam dolorum eum, alias aliquid consequuntur asperiores, quaerat a magnam. Repellat distinctio beatae, architecto illo blanditiis illum laborum. Hic, pariatur ea dicta distinctio dolore sequi explicabo natus nisi vel fuga ipsa sint voluptatem voluptatum eum delectus voluptas adipisci tempore labore repellendus, omnis ab maiores corporis sapiente id. Aliquam magnam, obcaecati consequatur reprehenderit nihil nemo fugiat minus tempora reiciendis quidem voluptates optio, totam commodi omnis excepturi quod ipsum neque. Reiciendis deleniti inventore nostrum ea suscipit placeat quis ipsa ducimus tempora enim voluptate beatae veritatis fugiat, perspiciatis doloremque iure impedit, voluptatem facilis! Doloremque, nesciunt id exercitationem nemo ullam amet illum consequatur illo expedita voluptatem officia est, natus, doloribus velit dicta? Dolorem autem placeat dolor mollitia pariatur a quae totam iusto distinctio? Dolores nam exercitationem sequi porro quisquam illo inventore natus architecto. Officiis laudantium id deleniti accusantium molestias amet dolores quam aliquam, aliquid laborum nulla temporibus perspiciatis eaque ullam? Debitis repellendus aliquid ullam, voluptatibus minima asperiores perspiciatis officiis modi enim, soluta esse suscipit ab assumenda corporis. Nemo molestiae illo nisi rem provident totam sunt quis facere quia, dolor numquam, odio corporis non aspernatur ducimus magni maxime at asperiores delectus temporibus cupiditate? Delectus aliquam deserunt iste porro maiores fugiat eaque ducimus, expedita adipisci illum enim. Expedita ipsa amet eos, corporis aspernatur laboriosam voluptate omnis numquam. Voluptates voluptatem a, maiores sequi quisquam dolore soluta minus laboriosam sunt doloribus ab suscipit culpa, excepturi ullam vitae pariatur quod dignissimos at enim. Dolorum quidem non voluptatum similique harum. Earum quidem aliquid pariatur officia repudiandae odio facere iure, veritatis iste corrupti sit veniam qui eius quo magnam harum maiores, rerum officiis perferendis! Magni, incidunt exercitationem nulla reiciendis vel placeat, rem repellendus praesentium, fugiat molestias voluptatem sit voluptates eum aliquid neque? Eligendi repellat alias soluta praesentium illum modi at expedita quos doloribus! Quam ullam maxime quo neque similique. Aliquam laboriosam rem, id pariatur ex ipsam doloremque officia provident a amet! Rerum quasi animi blanditiis dolores ab quae aliquam esse beatae iusto ipsum illum accusantium perferendis dicta ipsam cum maxime obcaecati debitis deserunt sapiente, sed eum possimus totam tempora! Explicabo delectus laudantium repellendus sit laboriosam quaerat tenetur ad cupiditate debitis, corporis ratione accusantium, id rerum libero porro asperiores, quisquam eveniet error. Qui soluta aliquam ab similique repudiandae voluptatibus repellat aspernatur quas, dignissimos deleniti atque accusantium dolorem fugiat et libero autem ad inventore pariatur distinctio quae quod nesciunt. Non nobis repellat, quae sit distinctio veritatis. Deleniti beatae ea blanditiis dignissimos illo temporibus similique unde harum impedit consequuntur, et inventore quod eius iure nostrum. Ad fugiat sapiente vitae voluptatibus vel, facilis qui dolor commodi quis ducimus magni veniam omnis esse pariatur voluptate, velit voluptates? Quam blanditiis error illum vitae ut maiores deserunt voluptas nesciunt hic dolore veniam molestias magnam, nihil aperiam cumque laborum perferendis expedita exercitationem?</p>
    </div>
  )
}