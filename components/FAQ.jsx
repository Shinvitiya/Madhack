import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs  = [
  {
    question:"What is MadHack 3.0?",
    answer: "MadHack 3.0 is a coding competition where enthusiasts come together to showcase their skills in mobile app development. It's a platform to learn, collaborate, and compete in creating innovative solutions for real-world challenges."
  },
  {
    question:"Who can participate in MadHack 3.0?",
    answer: "MadHack 3.0 is open to all undergraduate students! Whether you're a seasoned developer or just starting, we welcome participants of all skill levels and backgrounds."
  },
  {
    question:"How can I register for MadHack 3.0?",
    answer: "To register, visit our website and navigate to the registration page. Fill in the required details for yourself and your team members (if applicable) to secure your spot."
  },
  {
    question:"Do I need a team to participate?",
    answer: "Yes, for the Initial Round and the Final Hackathon, participants are required to form teams of three or four members each."
  },
  {
    question:"What if I'm a beginner in coding? Can I still participate?",
    answer: "Absolutely! MadHack 3.0 is designed for participants of all skill levels. It's a great opportunity for beginners to learn and for experienced coders to showcase their expertise."
  },
  {
    question:"Is the usage of Flutter mandatory for MadHack 3.0 projects?",
    answer: "No, it's not mandatory to use Flutter for your projects in MadHack 3.0. While we have Flutter sessions to help you, you are free to use other frameworks or technologies that best suit your project requirements."
  },
]

const FAQ = () => {
  return (
    <section className="md:px-20 px-6 bg-primary-black py-20">
      <div className="font-secondary text-primary-white text-4xl text-center">FAQ</div>

      <div className="text-primary-white flex flex-col items-center py-20">

        <div className="w-full md:w-3/4">
        {faqs.map(({question, answer}, index) =>(
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>
                {answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ