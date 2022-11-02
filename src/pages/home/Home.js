import React from "react";
import Footer from "../../component/footer/Footer";
import Footerbar from "../../component/footerbar/Footerbar";
import Header from "../../component/header/Header";
import Layout from "../../component/layout/Layout";
import "./Home.scss";
import { Row, Col, Container, Image } from "react-bootstrap";
import Button from "../../component/button/Button";
import plus from "../../Image/plus.png";
import timebg from "../../Image/timerBg.png";
import question from "../../Image/question.png";

console.log("hellow world");

function Home() {
  return (
    <div className="home-Page">
      <Layout>
        <main>
          <section id="first" className="firstSec">
            <Container>
              <Row className="align-items-center">
                <Col lg={12} xl={6}>
                  <div className="text-start">
                    <h2>
                      SGRB A Crypto
                      <span>Bank</span>
                    </h2>
                    <p>What is Crypto used for Utilities?</p>
                    <ul>
                      <li>
                        <span>
                          <img src={plus} alt="icon" />
                        </span>
                        <p>
                          A utility token is a crypto token that serves some use
                          case within a specific ecosystem. These tokens allow
                          users to perform some action on a certain network.{" "}
                        </p>
                      </li>
                      <li>
                        <span>
                          <img src={plus} alt="icon" />
                        </span>
                        <p>
                          A utility token is unique to its ecosystem. SGRB Token
                          for example, can only be used to tip content creators
                          through the browser or through other applications that
                          have integrated SGRB wallets, like Twitter. SGRB has
                          no other use beyond speculating on its value. The same
                          can be said of any utility token.
                        </p>
                      </li>
                      <li>
                        <span>
                          <img src={plus} alt="icon" />
                        </span>
                        <p>
                          Utility tokens are not mineable cryptocurrencies. They
                          are usually pre-mined, being created all at once and
                          distributed in a manner chosen by the team behind the
                          project.
                        </p>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col className="timeSec">
                  <Image fluid src={timebg} alt="img" />
                </Col>
              </Row>
            </Container>
          </section>
          <section className="secSec" id="sec">
            <Row>
              <Col>
                <Image fluid src={question} alt="img" />
              </Col>
              <Col>
                <h4>Why Choose SGRB?</h4>
                <h5>Why is SGRB Token is unique</h5>
                <p>
                  SGRB is Simple and safe Cryptocurrency management and payment
                  service through double encryption security system and two-way
                  QR technology.
                </p>
                <Row>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </Col>
            </Row>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            corrupti quaerat itaque. Quibusdam ullam similique magnam quam!
            Voluptatibus rerum suscipit error dignissimos iusto doloribus,
            quaerat perferendis accusantium pariatur, culpa laboriosam dicta,
            cupiditate sapiente dolorum quas iste voluptatum architecto nobis
            corrupti ipsa minima illum. Voluptatibus voluptate eius dolores
            eaque facere fugit et, eveniet illum veniam asperiores animi
            sapiente magni a natus quas iusto quae? Eligendi sint perferendis
            repellendus enim assumenda nisi voluptates, accusamus debitis
            provident dignissimos sapiente, rerum ea facere nesciunt laboriosam
            totam tenetur ducimus, animi fuga eaque unde accusantium sequi
            cumque? Maiores, possimus alias facilis illum, harum asperiores
            obcaecati ab, amet vitae ad labore exercitationem excepturi velit
            rerum assumenda ipsum consequuntur sit. Culpa porro eveniet amet
            animi, quisquam similique assumenda ipsa hic odit eaque est aperiam
            cupiditate, earum accusamus ipsam possimus qui! Deserunt provident
            sint quia a temporibus voluptates et maiores adipisci incidunt unde,
            magnam assumenda non? Commodi unde deserunt perspiciatis aspernatur
            consequuntur alias dolor, dolorum numquam ad necessitatibus fuga
            cupiditate assumenda dignissimos consequatur pariatur exercitationem
            nemo beatae laboriosam? Voluptate veritatis aliquid officiis
            reprehenderit, saepe totam facilis nostrum deleniti eligendi ipsum
            tenetur quia doloribus rerum quae ducimus adipisci cum
            exercitationem neque quisquam sequi labore odit. Quidem aspernatur
            saepe suscipit dolores quam eveniet iusto, sit, corporis voluptates
            adipisci accusantium debitis nemo. Architecto veritatis nulla rem
            repudiandae, aspernatur commodi obcaecati eum incidunt aliquid non
            id sapiente consequuntur, voluptatum ducimus. Qui voluptatum, odio
            optio nobis exercitationem voluptate iusto natus, hic iure adipisci
            ullam fugiat laborum, tempore quod. Repellendus atque consectetur
            nemo. Consequuntur, a suscipit asperiores cupiditate blanditiis
            perspiciatis veniam sunt delectus magnam modi, laborum consequatur
            optio enim temporibus vero illum possimus error eaque deleniti
            labore nobis reprehenderit. Animi ipsum aperiam nobis placeat
            voluptatibus temporibus nam esse repellat ad, voluptatem iusto magni
            inventore accusamus officia laborum tempore quod, accusantium
            eveniet. Maiores magnam dignissimos architecto sit, ab accusantium
            praesentium modi, inventore quae eaque amet atque porro fuga
            consequatur perspiciatis omnis distinctio beatae, corporis nobis
            vero est ipsa rem esse! Reprehenderit officiis veniam possimus
            distinctio libero. Amet laudantium deserunt dicta. Esse unde, ullam
            enim incidunt commodi corporis quae nam ducimus quod? Fugit, maiores
            ex aut sapiente dolore earum impedit dolorum nostrum, cupiditate
            ipsam iusto quod eligendi velit magnam! Dolor, ut voluptatibus.
            Voluptates at blanditiis amet molestiae vel ea tempore? Placeat
            nesciunt nisi maiores eveniet quo. Fugit perspiciatis at eos veniam
            quaerat maiores incidunt natus voluptatum neque amet, quibusdam quam
            nihil. Deleniti dolore ut magnam eaque deserunt facere, placeat et
            id aspernatur sunt nesciunt unde velit, quia laboriosam ipsum at
            sapiente esse possimus sequi fugit! Consequatur exercitationem porro
            fuga atque perferendis ratione eum maiores tempore unde dolorum.
            Officiis hic placeat id perspiciatis ab iste perferendis sequi cum,
            modi inventore! Blanditiis nam corporis voluptates! Obcaecati
            dolorum animi voluptatibus eligendi. Sed ut sunt deserunt odit illo
            temporibus, nihil, veritatis repellendus cumque suscipit voluptate,
            labore eos? Natus eum non corporis quisquam magni ratione dolor,
            consectetur fugiat, quis ipsa in quia ea incidunt. Soluta eos magnam
            dolor laboriosam tempora unde porro quasi temporibus! Deserunt nemo,
            ipsa excepturi ducimus magnam itaque ex nobis reprehenderit quidem
            aspernatur nesciunt perspiciatis vero molestiae porro. Distinctio
            doloribus quos corrupti praesentium eaque facere temporibus
            perferendis, enim dolores! Cum eius distinctio at asperiores libero
            nesciunt recusandae rerum, expedita fugit iure aperiam. Placeat
            possimus, corporis debitis et adipisci mollitia provident, minus
            asperiores unde porro eum sint accusamus maiores blanditiis quasi
            odit minima tenetur eos animi exercitationem obcaecati. Cumque
            repellat nulla unde perspiciatis! Reiciendis molestiae quisquam
            beatae vel odio impedit officiis rem eos, qui perferendis esse nam
            voluptates delectus. Corrupti illum iste dicta ea? Repellat
            distinctio eius unde ad corrupti quas dolor in eum, quaerat cumque
            dignissimos commodi optio veniam, odio nulla. Deleniti, excepturi
            maxime? Labore laudantium amet iste ab, maiores vel doloribus, quae
            earum ex accusantium, in ipsum ratione sint! Tempore molestias et
            rerum fugit ullam praesentium dolorum modi ratione! Similique
            consequuntur, perferendis illo veritatis voluptates at nam
            asperiores iusto autem mollitia tempora quas numquam sapiente
            voluptatum reprehenderit et incidunt unde atque. Ipsa nesciunt quos
            consequatur pariatur consequuntur cum, esse quis vitae hic quod
            deleniti minima beatae illo cumque odio iste recusandae, vel saepe
            rem nulla laborum? Cum saepe a neque voluptas numquam ipsa
            architecto maxime itaque sit aperiam, incidunt amet molestiae ea hic
            quasi rerum, id vitae atque dolor voluptatum! Architecto qui quas
            atque suscipit voluptates iure dolorem itaque repellat modi minus
            reiciendis cumque ratione corporis, repellendus veniam laudantium
            accusantium ipsam vero quibusdam. Perferendis quis necessitatibus
            hic voluptates minima, et accusamus iure sed! Omnis animi facilis
            voluptatem laudantium explicabo harum itaque enim molestiae tempore
            ut, minima, aperiam quaerat numquam debitis soluta unde voluptatibus
            sequi pariatur facere placeat quisquam quibusdam? Natus corrupti
            labore deleniti? Dignissimos, architecto veritatis! Ut, asperiores
            odit culpa ab delectus, suscipit fuga inventore aliquam tempora
            dolor voluptate quia in mollitia minima officia sit libero ad
            laborum, et vitae neque amet. Excepturi rerum placeat veritatis
            dolorem minima cum voluptates alias quasi. Eaque molestias
            dignissimos voluptatem ullam ex nemo ea iusto dolor architecto
            tenetur recusandae necessitatibus aliquid corrupti aut quod
            laboriosam magni magnam cum commodi, dicta nesciunt quas beatae?
            Tempore assumenda sit culpa vitae delectus non fuga id impedit.
            Praesentium dolorum quaerat natus repellat dicta. Sapiente totam
            sunt atque ut minima iure voluptatem eligendi vitae necessitatibus
            soluta enim voluptate cum tenetur labore, omnis deserunt molestias
            aperiam optio? Fugiat ullam animi quasi sit est quia ipsa ab
            molestiae, exercitationem necessitatibus dolorem qui quae sunt
            doloremque omnis repudiandae. Magni, vel facilis velit harum quaerat
            cumque neque, corrupti nesciunt autem quos labore, assumenda et.
            Vitae porro distinctio sunt ea mollitia eos, unde corporis, pariatur
            quibusdam quisquam atque. Laudantium aliquid ipsam sequi unde
            suscipit non saepe deserunt voluptate asperiores harum, cum eveniet
            consequuntur natus libero excepturi, dolor praesentium ex eius iusto
            sed. Commodi neque tempore inventore harum veniam ut laudantium
            culpa nulla. Inventore, deserunt quas? Labore officiis dolor sed vel
            sapiente minima delectus animi perferendis aperiam ipsa praesentium
            fuga aliquid, enim neque nam libero id numquam sint at consequatur
            in nobis cumque ad? Magnam consequuntur perferendis exercitationem
            quae dolor soluta blanditiis corporis quia necessitatibus non
            recusandae rerum voluptatem, saepe veniam quod amet. Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Dicta cupiditate
            aliquid quidem sit blanditiis beatae optio iusto quo sequi quia
            quaerat minus, tempore alias minima voluptates corporis eligendi
            similique quam veniam sed perspiciatis? Suscipit deleniti asperiores
            quis aut maxime explicabo saepe, nulla qui. Possimus autem, atque
            minus fugit minima delectus in, harum temporibus doloribus, fuga
            nesciunt? Quasi reprehenderit earum beatae quis qui quam odio eos,
            nesciunt, illum cum sit laboriosam in repellendus impedit
            exercitationem, facere ipsum facilis sequi ratione! Voluptates
            corrupti labore vero sit? Possimus non tenetur praesentium,
            reiciendis sunt delectus exercitationem numquam nobis corrupti
            debitis quas qui? Minima tenetur distinctio, cumque numquam
            voluptatibus amet consequuntur! Necessitatibus tenetur aspernatur
            dicta. Saepe exercitationem corrupti qui quod et distinctio ullam
            blanditiis dolores aspernatur sapiente id tenetur aperiam aliquam,
            delectus sint tempore fuga vero culpa alias numquam nam autem?
            Eveniet numquam dignissimos et. Explicabo magni eveniet nihil, sint
            officia, ipsum pariatur eum laboriosam odit earum accusantium quas
            minus debitis hic accusamus distinctio nam reprehenderit iste, quia
            cumque! Perspiciatis sapiente suscipit laborum in eius. Ab
            praesentium natus ipsum corporis minus. Recusandae amet itaque nihil
            ullam ad. Nisi aliquid dolorum tenetur placeat voluptatem
            repellendus alias magni. Commodi, eligendi minus hic sapiente, et
            atque aut placeat reiciendis impedit natus doloremque nam nobis
            recusandae exercitationem blanditiis animi omnis dolor expedita
            ratione cupiditate explicabo est nisi! Nulla magni earum, a quos
            corporis ratione quibusdam ipsam at distinctio nostrum fuga
            voluptate expedita debitis in rerum magnam maxime officia?
            Assumenda, mollitia quidem dicta cum quisquam vitae minima dolorum
            perferendis explicabo! Iste exercitationem sunt, dolore repellendus
            in illo consequuntur laudantium beatae consectetur facilis impedit
            cum enim at optio voluptas molestias quae omnis asperiores
            doloribus. Accusantium voluptatum corrupti labore expedita quos
            repudiandae pariatur beatae sapiente, voluptate necessitatibus
            temporibus similique. Necessitatibus quis cum quam assumenda
            consectetur quasi amet. Dolore, adipisci vel itaque quod earum
            dolores vero maiores sunt nulla natus nobis explicabo ea sed impedit
            at, doloremque tempore! Blanditiis alias exercitationem aliquid cum
            voluptates vel fuga vitae suscipit, consequatur at officia molestias
            eaque nihil facere minima, eveniet temporibus magni ipsum aut
            officiis velit iusto ratione? Accusamus ducimus voluptates pariatur?
            Maxime, quidem. Fuga omnis quisquam, non recusandae mollitia hic quo
            et! Minima porro nulla consequatur quaerat ratione magni ad sunt
            numquam esse facilis impedit consectetur mollitia tempora labore
            eius qui eaque officia perferendis enim, eveniet delectus,
            reprehenderit error. Enim autem incidunt consectetur voluptate
            quibusdam aliquid illum facere, velit repellat itaque ut doloremque.
            Voluptate, explicabo in odio illo quidem unde commodi officia
            debitis non eaque natus, optio facere aliquam beatae magnam
            molestias aspernatur? Dolore temporibus, quidem quis totam fugiat
            beatae in maiores voluptatibus explicabo dignissimos id vel aut ipsa
            maxime accusamus repudiandae. Eligendi quasi sint, explicabo
            doloremque rem ex, optio corporis veritatis adipisci obcaecati
            suscipit neque expedita sit repellat eius ipsum aut? Aut odio
            architecto officiis a itaque laudantium quo inventore eius iusto
            beatae id, earum nesciunt, perspiciatis obcaecati facilis
            asperiores? Repellat, praesentium a tempore ut ea nam modi tenetur
            voluptas velit? Magni vel dolor ipsam quasi debitis similique alias
            quisquam amet, libero assumenda nobis, illum inventore eos minus
            minima labore iusto perferendis? Et officiis doloremque harum, nisi
            facilis assumenda modi neque quos, excepturi nam distinctio! Natus
            quas expedita aut repellendus unde eveniet quisquam iusto facere
            fugiat illum dolore, beatae exercitationem sunt deserunt. Delectus
            quo quam porro. Libero nobis necessitatibus rerum distinctio eos
            iusto sunt dicta, officia rem consequatur vero unde asperiores.
            Minus debitis laudantium facilis quod magnam, qui tempora vel neque,
            praesentium quas aperiam reiciendis ea blanditiis perferendis
            aliquam adipisci molestias ipsa, modi itaque mollitia repudiandae.
            At commodi ducimus illum exercitationem. Est autem laboriosam nulla
            saepe facilis, nam ea eius? Deserunt iusto molestiae consectetur
            quas, aspernatur officia vero in, repellat ullam suscipit, maxime
            cumque! Similique aperiam tenetur nesciunt nobis voluptate,
            dignissimos id repellat optio explicabo officia! Nesciunt
            consequuntur ducimus voluptatem sed, consectetur temporibus!
            Veritatis fugit sunt perferendis, dicta quod nihil dolore aperiam
            officia odio dolorem ut accusantium recusandae optio rerum,
            similique minus illo quisquam eius autem consequatur nesciunt
            tempore. Nostrum dolores impedit doloremque quas alias voluptatibus,
            eligendi adipisci! Quidem hic odio totam atque voluptatem vitae
            illum nesciunt qui dignissimos, laborum aliquid repellat a natus
            laudantium. Nihil hic, minus ipsum ullam sapiente iusto aperiam
            cumque sit. Molestias voluptatum, laudantium mollitia alias maxime
            inventore architecto unde excepturi et rem officiis necessitatibus
            incidunt accusantium. Alias voluptate, iste officia odio commodi
            accusamus culpa enim et vero corrupti fuga veniam asperiores
            repudiandae consectetur sapiente quas omnis! Saepe ex voluptates
            harum enim dicta voluptatum eligendi, cumque et optio repellendus,
            eos sapiente libero! Ipsam laborum accusamus excepturi magni,
            asperiores vero odio consectetur, ex, nemo culpa rem. Quod,
            veritatis non. Cum ab labore similique consequuntur, cumque totam
            expedita officia officiis amet voluptatum, dolore at, dolorum
            nostrum maxime minima nulla odio assumenda omnis recusandae eaque
            non quisquam quasi? Ipsa ducimus veniam, dolores, facere repellendus
            iusto ullam repellat sint porro maiores ea. Quis itaque amet id
            reprehenderit dolorem sunt temporibus, blanditiis saepe quasi odit!
            Optio earum quidem id unde itaque iusto, repellendus adipisci ullam
            ipsam magni magnam culpa quod soluta repellat eaque, explicabo
            dolorem omnis fuga, non nobis saepe expedita? Quam numquam sed eum,
            vero assumenda, repellendus praesentium earum sunt voluptate rerum
            doloribus? Expedita consequuntur eaque ab inventore unde voluptatem
            recusandae natus, veniam repellendus! Provident magni modi nostrum
            nulla dolores et laborum illum odio obcaecati voluptate nisi quos
            accusamus tempore minus, iure ipsum cupiditate eius perspiciatis,
            veritatis molestiae adipisci rem cum quidem ad! Consequuntur
            eligendi facere quidem quos dicta reiciendis, quasi est qui
            doloremque, culpa quas nesciunt commodi assumenda obcaecati nisi
            sapiente laboriosam minima? Nesciunt impedit placeat nostrum a
            voluptatibus. Quos recusandae vero debitis unde provident iusto rem
            ducimus sequi quidem doloribus, consequatur enim aut totam voluptas
            reiciendis asperiores sit aliquid ut! Quo deserunt, sed aliquam
            itaque eligendi adipisci iste odio nisi esse error, quam dolorem eos
            incidunt, dicta qui vero maxime vitae eius. Incidunt doloribus ut
            perspiciatis quibusdam, exercitationem perferendis? Enim fugit
            mollitia suscipit illo porro ad iusto deserunt molestiae esse
            voluptatum ratione dicta incidunt iure a, dolorem eligendi eius
            asperiores ut? Voluptate commodi fuga minus, assumenda ratione ipsa
            itaque nostrum adipisci, at molestias tenetur temporibus nam
            voluptatum amet reiciendis sunt voluptates vitae modi magnam.
            Provident, error deleniti possimus blanditiis magnam ducimus.
            Ducimus impedit quo similique quia, animi id illum esse. Deserunt,
            cupiditate ab sequi ullam ex omnis debitis in recusandae quia ea
            enim, itaque odit aperiam beatae, magnam pariatur facere at aliquid
            sit labore cumque? Ipsum blanditiis velit eum dolor harum ullam?
            Officiis rerum rem modi earum quibusdam ipsa cumque enim
            voluptatibus odio accusamus! Officiis, nam nihil numquam beatae
            quidem voluptate temporibus quasi alias iusto? Atque recusandae
            voluptate id? Cum sit quos consequatur beatae totam! Non eius earum
            culpa illum reiciendis, deleniti illo. Vero, corporis quibusdam,
            fugiat sed unde necessitatibus aperiam dicta possimus perferendis
            velit ut deleniti, recusandae asperiores laboriosam? Alias commodi
            quasi ipsum eligendi magni voluptates accusamus nihil. Nostrum nobis
            maiores deserunt fuga placeat repellendus facere eveniet aut at vel!
            Provident dignissimos, asperiores id explicabo beatae, corporis
            repellat sit dolore, cum cumque minima vel maxime iusto animi in ex
            repellendus optio laboriosam. Doloribus sint aspernatur totam
            quaerat temporibus vero, suscipit doloremque adipisci quam illo
            tempore consectetur rerum amet commodi non nihil eveniet eaque
            delectus dignissimos corrupti iusto dolore, similique animi? Error
            recusandae adipisci delectus, ab doloremque asperiores qui facere
            numquam officiis assumenda placeat architecto ex aliquid provident.
            Ullam, a exercitationem, optio cupiditate tenetur sunt quae modi
            eius quisquam aperiam maxime ex quod autem quasi! Reprehenderit
            voluptas ex temporibus doloribus praesentium nisi ea incidunt
            voluptates? Ad eligendi officia sit magnam esse amet est alias
            voluptates aspernatur sed. Suscipit tempora est delectus impedit
            voluptatibus magnam ipsum facere molestiae fuga similique!
            Perspiciatis cum exercitationem delectus sit iure officiis sed, vero
            dolorum nulla velit voluptatum debitis expedita alias quo eos
            quaerat corporis quisquam consequuntur repudiandae dolorem rerum
            unde placeat accusamus laudantium. Enim ullam pariatur inventore
            laboriosam rem. Assumenda voluptates neque cumque deserunt eveniet
            obcaecati asperiores. Numquam quisquam necessitatibus modi eveniet
            corrupti iste amet dignissimos sed impedit error fuga adipisci id
            autem, labore illum consequuntur dolorem eum pariatur ipsum
            aspernatur. A, atque ipsum? Fugit perspiciatis odio itaque
            explicabo, est natus. Ducimus ex dolore, aliquam quasi possimus
            facere laborum sed quidem suscipit nulla, dolores perferendis
            impedit doloremque nihil mollitia numquam. Omnis molestias suscipit
            quisquam assumenda labore porro tempore obcaecati, perspiciatis in
            soluta dicta temporibus nesciunt sint. Optio nobis doloribus, esse
            ipsum aut soluta veniam adipisci molestiae? Optio, consequatur.
            Cupiditate aut aspernatur sint ut mollitia quasi debitis sequi dicta
            a delectus nisi ipsum reiciendis omnis enim repudiandae eligendi
            numquam maiores non provident tempora, deserunt ratione deleniti
            expedita rerum. Dolor ex animi sapiente molestias eius veritatis aut
            eaque consectetur neque ab ipsum, consequuntur porro impedit, facere
            sunt. Magni sunt illum id dignissimos tenetur eos optio. Nam ducimus
            aperiam quis. Porro officia commodi fugiat, totam quis rerum,
            expedita itaque corporis est ad iure atque quasi voluptatibus
            numquam praesentium ut nemo, enim dolores. Inventore quod
            perferendis quae, enim quidem quas vitae totam eligendi delectus!
            Excepturi voluptate aliquid quaerat iste expedita ipsa error
            doloremque id cumque animi molestias vitae quisquam neque ad
            laboriosam, voluptatum velit eum voluptatibus! Ratione natus
            excepturi doloribus optio?
          </section>
        </main>
      </Layout>
    </div>
  );
}

export default Home;
