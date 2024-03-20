import data from "@/data/cv.json";
import { GlobeIcon, MailIcon, PhoneIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto">
      <main className="flex flex-col items-center gap-10 justify-center p-8">
        <section className="flex justify-between gap-5 bg-gradient-to-r from-[#0E5259] to-[#346924] p-10 rounded-lg">
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-3xl font-bold mb-1">{data.basics.name}</h1>
            <p className="font-mono text-sm">{data.basics.about}</p>
            <span className="flex gap-2">
              <GlobeIcon className="size-3" />
              <a
                href={data.basics.locationLink}
                target="_blank"
                className="font-mono text-xs hover:underline"
              >
                {data.basics.location}
              </a>
            </span>
            <span className="flex gap-1">
              {data.basics.email && (
                <a
                  href={`mailto:${data.basics.email}`}
                  className="border border-white rounded-md p-2"
                  target="_blank"
                >
                  <MailIcon className="size-4" />
                </a>
              )}
              {data.basics.phone && (
                <a
                  href={`tel:${data.basics.phone}`}
                  className="border border-white rounded-md p-2"
                  target="_blank"
                >
                  <PhoneIcon className="size-4" />
                </a>
              )}
              {
                data.basics.profiles.map(profile => (
                  <a
                    key={profile.network}
                    href={profile.url}
                    className="border border-white rounded-md p-2"
                    target="_blank"
                  >
                    {
                      profile.network == "GitHub" ?
                        <GithubIcon className="size-4" /> :
                        <LinkedinIcon className="size-4" />
                    }
                  </a>
                ))
              }
            </span>
          </div>
          <div>
            <ThemeToggle />
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3">Sobre mí</h2>
          <p className="font-mono text-sm text-zinc-600 dark:text-zinc-400">{data.basics.summary}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3">Experiencia laboral</h2>
          <div className="flex flex-col gap-6">
            {data.work.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="font-mono text-sm text-zinc-600 dark:text-zinc-400">{item.startDate} - {item.endDate}</p>
                </div>
                <h4 className="font-mono">{item.position}</h4>
                <p className="font-mono text-sm text-zinc-600 dark:text-zinc-400">{item.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {
                    item.highlights.map(hl => (
                      <Badge key={hl}>{hl}</Badge>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full">
          <h2 className="text-2xl font-bold mb-3">Educación</h2>
          <div className="flex flex-col gap-6">
            {data.education.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold">{item.institution}</h3>
                  <p className="font-mono text-sm text-zinc-600 dark:text-zinc-400">{item.startDate} - {item.endDate}</p>
                </div>
                <p className="font-mono text-sm text-zinc-600 dark:text-zinc-400">{item.area} - {item.studyType}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-3">Habilidades</h2>
          <div className="flex flex-wrap gap-2">
            {
              data.skills.map(item => (
                <Badge key={item}>{item}</Badge>
              ))
            }
          </div>
        </section>
        <section></section>
      </main>
    </div>
  );
}