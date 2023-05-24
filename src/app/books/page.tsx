import PostCard from "@/components/PostCard";
import PostWidget from "@/components/PostWidget";


const books = [
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    summary:
      "Talous jakaantuu neljään osaan: Tulot, menot, varat ja velat Rikas ajattelija maksaa itselleen aina ensin, eli tuloista raha menee varallisuuteen ennen menoja. Välttää velkoja (eli ostoksia, jotka kuluttavat rahaa eikä tuota sitä) Käytä rahaa viisautumiseen, eli sijoita itseesi. Talousälykkyys on elintärkeää rikastumisen suhteen riippumatta ammatista. Uskalla tehdä virheitä, käy ne jälkikäteen läpi ja ota oppia. Nuorempana on helpompi maksaa ns. Oppirahoja. Muista antaa muille, niin saat itse takaisin enemmän. Tämä pätee kaikkeen, rahaan, hymyihin, tietoon, kaikkeen. TOIMI! Älä jätä ideoita ja ajatuksia tekemättä, muuten niillä ei ole mitään väliä. Ei ole olemassa oikotietä onneen, tai mitään “näin rikastut nopeasti” -temppua. Opiskele, kokeile, epäonnistu. Tätä kuin tarpeeksi kauan tekee, menestys seuraa. “Tärkeää ei ole paljonko tienaa, vaan paljonko sitä jää jäljelle.” Työnteolla ei vaurastu, raha on laitettava tekemään töitä sinulle. Verojen vähentäminen on vain “pelin” pelaamista fiksusti. ",
  },
  {
    title: "Tie menestykseen | 7 Toimintatapaa",
    author: "Stephen R. Covey",
    summary:
      "1.Ole proaktiivinen. Älä ole reaktiivinen, eli tee päätöksiä/valintoja riippuen ympäristöstään.2. Aloita tavoite mielessä 3. Pane asiat tärkeysjärjestykseen 4. Tähtää siihen, että kumpikin voittaa 5. Yritä ensin ymmärtää, sitten tulla ymmärretyksi 6. Hyödynnä synergiaa 7. Teroita saha. "+
      "Kirja sisältää todella tärkeitä asioita, mutta ne on esitetty hieman tylsästi ja töksähtelevästi. Ei sisällä paljoa tarinaa, on vähän oppikirjamainen. 380 sivua, lukemisessa kesti kuukausia. ",
  },
];

export default function Books() {
  return (
    <main className="container min-h-screen px-10 mx-auto mb-8 font-mono">
      <h2 className="py-6 text-lg font-bold">Kirjatiivistelmät:</h2>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {books.map((post, index) =>
            PostCard({ title: post.title, desc: post.summary, index: index })
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
