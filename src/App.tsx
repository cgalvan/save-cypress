//import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";

import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Users, Megaphone } from "lucide-react";

const emailAddresses: string[] = [
  "bruce.gearing@leanderisd.org",
  "kristen.alex@leanderisd.org",
  "sade.fashokun@leanderisd.org",
  "nekosi.nelson@leanderisd.org",
  "trish.bode@leanderisd.org",
  "paul.gauthier@leanderisd.org",
  "gloria.dholakia@leanderisd.org",
  "christine.mauer@leanderisd.org",
  "francesca.romans@leanderisd.org",
  "anna.smith@leanderisd.org",
  "governance.team@leanderisd.org",
  "laurelyn.arterbury@leanderisd.org",
  "sarah.grissom@leanderisd.org",
  "john.graham@leanderisd.org",
  "shawn.swisher@leanderisd.org",
  "matt.bentz@leanderisd.org",
  "crestina.hardie@leanderisd.org",
  "jimmy.disler@leanderisd.org",
  "pete.pape@leanderisd.org",
  "angela.hodges@leanderisd.org",
];

const emailTemplate = `Dear Members of the LISD Board,

I am writing to express deep concern over the proposed closure of Cypress Elementary School due to low enrollment numbers. While we understand the challenges of maintaining operations amid changing demographics and budgetary pressures, I urge you to consider the broader value and unique strengths our school brings to students, families, and the community as a whole. Please keep Cypress open!

Cypress is far more than an enrollment statistic. It is a vibrant and supportive community where students are known, valued, and nurtured. Families choose our school not just for convenience, but for the connection they feel with teachers, staff, and one another. This sense of belonging is irreplaceable and has a lasting impact on student well-being and success. Our Cypress community is a lifeline to our students, teachers, and families.

Beyond community, our school has demonstrated strong programmatic success. Our news broadcasting program (Cheetah News), annual spring performing arts programs, nationally ranked Destination Imagination team, Spanish volunteer program, beloved PTA community programs such as Multicultural Night, Fall Fest, and STEM night have not only enriched students’ academic lives but have also earned recognition and positive outcomes. These programs are thriving because they are supported by a dedicated team of educators and supportive families who believe in the mission of empowering every child to reach their potential.

Most importantly, we believe in the potential of our school to grow and adapt. We are already seeing early signs of renewed interest from prospective families from surrounding schools who toured our campus in the spring specifically because of our strong reputation. The foundation is in place—what we need now is the time and support to build on that momentum.

Closing our school would not only displace students and families but would also dismantle a strong educational environment that cannot be easily replicated. We respectfully ask that the Board keep Cypress OPEN and work with us to explore creative solutions, partnerships, or a phased improvement plan that allows us to continue serving the community.

Sincerely,

[YOUR NAME HERE]
`;
const mailToLink = `mailto:${emailAddresses.join(
  ","
)}?subject=Choose%20Path%203&body=${encodeURIComponent(emailTemplate)}`;
function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Save Cypress Elementary
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            As many of you have heard, the LISD Board is considering closing our
            campus to be repurposed in 2026-2027. We are fighting for our school
            and need your help.
          </p>
          <p className="text-lg max-w-2xl mx-auto">
            Learn how to get involved and help us protect the future of our
            children.
          </p>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          <Card className="bg-blue-50">
            <CardContent className="p-6 text-center">
              <Mail className="mx-auto mb-4 h-10 w-10 text-blue-600" />
              <h2 className="text-xl font-semibold mb-2">
                Email the School Board
              </h2>
              <p className="mb-4">
                Use our prepared letter with any added personal touches or
                stories (and please replace with your name at the bottom).
              </p>
              <Button asChild>
                <a href={mailToLink}>Send an Email</a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-blue-50">
            <CardContent className="p-6 text-center">
              <Users className="mx-auto mb-4 h-10 w-10 text-blue-600" />
              <h2 className="text-xl font-semibold mb-2">
                Join the PTA Facebook Group
              </h2>
              <p className="mb-4">
                Stay informed with the latest updates on how you can help.
              </p>
              <Button asChild>
                <a
                  href="https://www.facebook.com/share/1JRkThGK6k/?mibextid=wwXIfr"
                  target="_blank"
                >
                  Join the Group
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-blue-50">
            <CardContent className="p-6 text-center">
              <Megaphone className="mx-auto mb-4 h-10 w-10 text-blue-600" />
              <h2 className="text-xl font-semibold mb-2">Spread the Word</h2>
              <p className="mb-4">
                Share our message on social media, talk to neighbors, and rally
                support.
              </p>
              <Button asChild>
                <a href="https://twitter.com/intent/tweet?text=Support%20our%20school%20by%20choosing%20Path%203%21%20%23SaveOurSchool">
                  Share on Twitter
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        <footer className="text-center text-sm text-gray-500 mt-10">
          © {new Date().getFullYear()} Save Our School Committee
        </footer>
      </div>
    </>
  );
}

export default App;
