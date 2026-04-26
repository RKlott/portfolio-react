import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Écrire du code maintenable et évolutif qui résiste à l'épreuve du temps.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimiser la vitesse et offrir une expérience utilisateur ultra-fluide et rapide.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Travailler en étroite collaboration avec les équipes pour concrétiser les idées. ",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Rester à la pointe des dernières technologies et des bonnes pratiques. ",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div>
        {/*Colonne de gauche*/}
        <div className="space-y-8">
          <div className="animate-fade-in ">
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              A propos de moi
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in
                animation-delay-100 text-secondary-foreground"
          >
            Construisons le futur,
            <span className="font-serif italic font-normal text-white">
              {" "}
              un composant, un projet à la fois.
            </span>
          </h2>

          <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quos quis sed ullam, harum a. Provident et quae beatae porro doloremque maiores perspiciatis unde iure nihil sed! Ex, quas dolore.
                Accusantium, molestias soluta. Dolorum odit sapiente in debitis eos qui, delectus provident culpa blanditiis, quibusdam amet odio similique libero reprehenderit. Sint amet eaque nesciunt enim vero, excepturi temporibus aliquam aspernatur!
                Facere eaque fugit eveniet tempore consequuntur quibusdam dicta beatae delectus quisquam vero, rem debitis odio unde animi accusantium quae adipisci nisi, maxime aspernatur iste quas at, eos magnam harum? Autem.
                Facere impedit non sint sapiente porro sequi corrupti esse laudantium laboriosam explicabo harum ad ut ipsa hic nemo suscipit odit veniam aut illo, a est rem reiciendis! Reiciendis, modi in?</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus at, ipsam officia, assumenda sit voluptas aut, fugit rem nemo numquam hic. Repellendus maxime quo asperiores consequatur voluptas alias sit provident.
                Ipsum, eveniet laborum. Ex asperiores labore sint molestiae illo at debitis similique quas excepturi explicabo tempora quibusdam fugit hic vel, dolorum neque nihil alias corporis modi quia ducimus minus architecto!
                Provident totam maxime inventore iure sequi minus vero sit pariatur? Id tenetur laborum culpa ad placeat accusantium itaque necessitatibus eligendi consequuntur explicabo illo architecto ipsum, voluptas cumque quasi vel eos.
                Nesciunt, unde perferendis quo dolore cum voluptate laborum aliquam hic, a esse consectetur qui! Dignissimos modi iure repellat libero id, saepe cum dolores sint voluptatem voluptas quo blanditiis mollitia soluta.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur provident sed error sit tenetur itaque qui repellendus voluptas voluptatum cumque hic eligendi commodi illo, enim nihil quo dolor quibusdam?
                Hic illo provident consequatur ut amet doloribus eius tempore iusto consequuntur soluta quae porro perferendis accusantium ducimus quis necessitatibus, placeat rerum cumque, blanditiis possimus facere, quibusdam libero! Mollitia, accusantium ad.
                Totam nisi repudiandae voluptates, veritatis, illo soluta eum magni molestiae, maiores officia voluptate! Quibusdam perspiciatis repudiandae magni esse facere voluptate unde facilis, quo aut ratione molestiae itaque nisi aliquid! Voluptas.
                Eveniet ipsa numquam assumenda unde fugit quae praesentium animi, libero corporis distinctio magni error, ab accusamus deserunt fugiat molestias commodi repellendus quisquam quo porro. Error sit officia deleniti sapiente quis!
            </p>
          </div>
          <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
            <p className="text-lg font-medium italic text-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos officia accusamus velit, exercitationem ad suscipit delectus natus quos impedit enim aliquid voluptatibus quidem recusandae voluptas qui iste consequatur maiores.
                Vitae quis nemo officiis sapiente quaerat maxime perferendis fugiat dolores quod quae adipisci, libero odit impedit ipsum quo voluptates atque ducimus veniam eveniet molestias iste consectetur maiores harum. Omnis, optio.
                Quisquam a corrupti minima possimus iusto illo quam, libero amet quia cupiditate ipsum totam, ipsa commodi voluptates aliquam rem similique. Totam doloribus vel hic et magni rem tempore, suscipit necessitatibus.
                Esse ipsam distinctio et inventore quo dolore, magni impedit numquam consequatur obcaecati, porro aperiam possimus laboriosam dolor, hic aliquid cum repellat! Iste dolores aut tempora magni mollitia. Nihil, alias consequatur?
                Sed delectus fuga quas consequatur? Nostrum reprehenderit fugit repudiandae, quisquam eligendi, vitae, voluptatum consequuntur recusandae id aliquam repellat maxime iure eaque! Nam hic ratione itaque soluta sit sed? Suscipit, explicabo!
            </p>
          </div>
        </div>

        {/* Colonne de droite - highlights */}
        <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, id) => (
                <div key={id} className="glass rounded-2xl p-6 animate-fade-in" style={{animationDelay: `${id + 1 * 100}ms`}}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/200">
                        <item.icon className="w-6 h-6 text-primary"/>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
