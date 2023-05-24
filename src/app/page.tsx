import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";

const posts = [
  {
    title: `Ensimmäinen blogi postaus 24.5.2023`,
    excerpt: `Heipä hei, tervetuloa blogiini! 
    
    Tänne pyrin kirjoittamaan vähintään viikoittain päivityksiä ohjelmointi urani kehityksestä, sekä tiivistämään lukemiani tietokirjoja.
    Idea lähti yhdestä lukemastani kirjasta, jossa painotettiin kertauksen tärkeyttä asioiden oppimisessa. Halusin siis alustan johon voin kirjoittaa tiivistelmiä lukemistani kirjoista, jotta niiden asiat iskoistuisivat paremmin mieleeni.
    Lisäksi halusin oppia uusia ohjelmointiteknologioita, joten tämä blogi sivu on näiden kahden idean lopputulos. Tämän hetkinen tilanne on, että olen lukenut seitsemän kokonaista tietokirjaa. Aloitin aktiivisesti lukemaan vasta vuosi sitten, joten olen tyytyväinen tähän saavutukseen. 
    
    Lukemani kirjat: Tie menestykseen (Stephen R. Covey), Maailman 50 vaarallisinta yhtiötä (J-P. Raeste ja H. Sokala), Deep Work (Cal Newport), 4 tunnin työviikko (Timothy Ferriss), Paras (Erik Larssen), Rich Dad Poor Dad (Robert Kiyosaki) ja Viisas pääsee vähemmällä (Sampo Sammalisto).
    Tällä hetkellä olen puolivälissä Robert Kiyosaken kirjaa: Kehitä talousälyäsi. Kirja on hyvin saman tyylinen kuin Rich Dad Poor Dad, mutta keskittyy enemmän talousasioihin. 
    Ohjelmoinnin kannalta tämän hetkinen tilanne on nousujohteinen. Valmistuin 11.5.2023 tietotekniikan kandidaatiksi, mutta en vieläkään ole onnistunut saamaan ensimmäistä ohjelmointityötä.
    Aion viettää tämän kesän opiskellen ja kehittäen ohjelmointitaitojani. Tavoitteeni olisi saada syksyllä jokin junior tai trainee työpaikka ohjelmoinnin parista. Jos en saa syksyllä vielä työpaikkaa, niin jatkan opiskelua diplomi-insinöörivaiheessa täysipäiväisesti. Valitsin pääaineeksi: Robotiikka ja Autonomiset järjestelmät, sekä sivuaineeksi: Ohjelmistotekniikan.
    
    Sain vastikään oman portfoliosivun julkaistua, joka löytyy osoitteesta https://www.luuka.software/ . Sivun ideana on helpottaa ja nopeuttaa minun ammattiprofiilin esittelyä mahdollisille työnantajille. Sivulta löytyy tiivistetysti osaamiseni, työkokemukseni ja linkit ohjelmointiprojekteiheni. Tuota aikaisempi webbi devaus projektini, kisakalenteri, löytyy osoitteesta: https://luukalindgren.github.io/Competition-calendar/ .
    
    Luuka Lindgren`,
  },
  {
    title: "Blogi postaus 2",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra accumsan in nisl nisi scelerisque eu. Pharetra convallis posuere morbi leo urna molestie at elementum. Rhoncus est pellentesque elit ullamcorper dignissim. Imperdiet proin fermentum leo vel orci porta. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Egestas quis ipsum suspendisse ultrices gravida. Odio ut enim blandit volutpat maecenas volutpat. Vulputate enim nulla aliquet porttitor. Arcu dictum varius duis at consectetur lorem donec massa sapien. Et leo duis ut diam quam. Odio ut sem nulla pharetra diam. Vestibulum sed arcu non odio euismod lacinia at quis. Feugiat scelerisque varius morbi enim. Ut faucibus pulvinar elementum integer enim neque. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum.Orci eu lobortis elementum nibh. Non tellus orci ac auctor augue mauris. Enim nec dui nunc mattis enim ut tellus elementum. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Sit amet cursus sit amet dictum. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Netus et malesuada fames ac turpis egestas integer eget aliquet. Luctus venenatis lectus magna fringilla. Mi tempus imperdiet nulla malesuada. Urna molestie at elementum eu facilisis. In nibh mauris cursus mattis.Bibendum at varius vel pharetra vel turpis nunc eget lorem. Diam vulputate ut pharetra sit amet aliquam id diam. Eu nisl nunc mi ipsum faucibus. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Urna molestie at elementum eu. Ullamcorper eget nulla facilisi etiam dignissim diam. Elementum curabitur vitae nunc sed velit. Interdum velit euismod in pellentesque massa placerat duis ultricies. Aenean et tortor at risus viverra adipiscing at. Etiam dignissim diam quis enim lobortis scelerisque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Fringilla urna porttitor rhoncus dolor. Lectus nulla at volutpat diam ut venenatis tellus. Porttitor eget dolor morbi non arcu risus quis varius quam. Orci ac auctor augue mauris augue.Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Pulvinar pellentesque habitant morbi tristique senectus et. Ac tincidunt vitae semper quis lectus nulla at volutpat. Arcu non odio euismod lacinia at quis risus sed vulputate. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Donec massa sapien faucibus et molestie ac feugiat. Ut sem nulla pharetra diam sit amet nisl. Est ultricies integer quis auctor elit sed. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Dolor morbi non arcu risus. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Sit amet massa vitae tortor. Turpis egestas pretium aenean pharetra. Faucibus ornare suspendisse sed nisi. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Accumsan in nisl nisi scelerisque. Massa vitae tortor condimentum lacinia quis. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.Enim ut sem viverra aliquet. Lectus nulla at volutpat diam ut venenatis. Sed faucibus turpis in eu mi bibendum neque egestas. Et sollicitudin ac orci phasellus. Sit amet est placerat in egestas erat imperdiet sed. Nulla facilisi nullam vehicula ipsum. Mauris commodo quis imperdiet massa. Nisl rhoncus mattis rhoncus urna neque. Pellentesque habitant morbi tristique senectus et netus et malesuada. Ornare lectus sit amet est placerat in egestas. Quam adipiscing vitae proin sagittis nisl rhoncus. Scelerisque viverra mauris in aliquam sem. Metus dictum at tempor commodo ullamcorper a lacus. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Convallis a cras semper auctor neque. Duis ut diam quam nulla porttitor. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Ornare quam viverra orci sagittis eu.",
  },
];

export default function Home() {
  return (
    <main className="container min-h-screen px-10 mx-auto mb-8 font-mono">
      <h2 className="py-6 text-lg font-bold">Viikottaiset kuulumiset:</h2>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) =>
            PostCard({ title: post.title, desc: post.excerpt, index: index })
          )}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
          </div>
        </div>
      </div>
    </main>
  );
}
