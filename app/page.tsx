import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Code, Award, Download, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const skills = {
  Programming: ["Python", "JavaScript", "C"],
  "Web Development": ["HTML", "CSS", "GitHub Pages"],
  Tools: ["Git", "Cloudflare", "VS Code"],
}

const projects = [
  {
    id: 1,
    name: "Data Science Project",
    description: "A comprehensive data analysis project using Python libraries for data manipulation and insights",
    image: "/vercel.svg",
    github: "https://github.com/yawhatev/project",
    liveDemo: "https://your-ecommerce-demo.vercel.app",
    technologies: ["Python", "NumPy", "Pandas"],
  },
  {
    id: 2,
    name: "Mini JS Project",
    description: "A collection of interactive web applications built with vanilla JavaScript and modern CSS",
    image: "/window.svg",
    github: "https://github.com/yawhatev/mini_js_proj",
    liveDemo: "https://your-weather-app.vercel.app",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    name: "Aahar Project",
    description: "A food-related application designed to address food management and distribution challenges",
    image: "/file.svg",
    github: "https://github.com/yawhatev/supa",
    liveDemo: "https://your-task-manager.vercel.app",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 4,
    name: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills",
    image: "/next.svg",
    github: "https://github.com/yawhatev/portfolio",
    liveDemo: "https://your-portfolio.vercel.app",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
]

const achievements = [
  "Participated in [Hackathon Name], built a project in 24 hours",
  "Completed Python for Everybody course by Coursera",
  "Volunteered as a coding mentor for beginners",
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-6 py-5">
          <nav className="flex justify-between items-center max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resima Budhathoki
            </h1>
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                About
                <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Skills
                <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Projects
                <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#achievements" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium relative group">
                Achievements
                <span className="absolute bottom-[-8px] left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:scale-105">
                Contact
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden flex flex-col gap-1.5 p-2">
              <span className="w-6 h-0.5 bg-slate-600 transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-slate-600 transition-all duration-300"></span>
              <span className="w-6 h-0.5 bg-slate-600 transition-all duration-300"></span>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative py-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-1/2 w-60 h-60 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Profile Picture - Left Side */}
              <div className="flex justify-center -mt-20">
                <div className="relative">
                  {/* Decorative rings */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-lg animate-pulse"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-30 blur-md"></div>

                  {/* Main profile picture */}
                  <div className="relative w-96 h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                    <Image
                      src="/profile-picture.jpg"
                      alt="Resima Budhathoki Profile Picture"
                      width={384}
                      height={384}
                      className="w-full h-full object-cover object-bottom hover:scale-105 transition-transform duration-500 rounded-full"
                    />
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Available
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Nepal
                  </div>
                </div>
              </div>

              {/* Content - Right Side */}
              <div className="text-center lg:text-left space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                    <Calendar className="w-4 h-4" />
                    Computer Engineering Student
                  </div>

                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    <span className="text-slate-800">Hi, I'm</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Resima Budhathoki
                    </span>
                  </h1>

                  <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                    Passionate computer engineering student and aspiring web developer, eager to build{" "}
                    <span className="text-blue-600 font-semibold">real-world projects</span> and{" "}
                    <span className="text-purple-600 font-semibold">explore new technologies</span> to solve everyday problems.
                  </p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">10+</div>
                    <div className="text-sm text-slate-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">3+</div>
                    <div className="text-sm text-slate-600">Languages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">2+</div>
                    <div className="text-sm text-slate-600">Years Learning</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    asChild
                  >
                    <Link href="https://github.com/yawhatev" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      View My Work
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-300 bg-transparent"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download CV
                  </Button>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                    asChild
                  >
                    <Link href="mailto:budhathokiresima@gmail.com">
                      <Mail className="w-5 h-5 mr-2" />
                      Get In Touch
                    </Link>
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-center lg:justify-start">
                  <Link
                    href="https://github.com/yawhatev"
                    className="w-12 h-12 bg-slate-100 hover:bg-slate-800 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/resima-budhathoki-033471311"
                    className="w-12 h-12 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="mailto:budhathokiresima@gmail.com"
                    className="w-12 h-12 bg-green-100 hover:bg-green-600 text-green-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-slate-600">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, skillList], index) => {
              const gradients = [
                "from-blue-600 to-purple-600",
                "from-purple-600 to-indigo-600", 
                "from-indigo-600 to-blue-600"
              ];
              const bgGradients = [
                "from-blue-50 to-purple-50",
                "from-purple-50 to-indigo-50",
                "from-indigo-50 to-blue-50"
              ];
              
              return (
                <Card
                  key={category}
                  className="hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-xl group relative overflow-hidden min-h-[280px]"
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[index]} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="pb-6 relative z-10">
                    <CardTitle className="text-2xl text-slate-800 flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${gradients[index]} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Code className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-bold">{category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 relative z-10 px-6 pb-8">
                    <div className="flex flex-wrap gap-3">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          className={`bg-gradient-to-r ${gradients[index]} text-white hover:shadow-lg border-0 shadow-md transition-all duration-300 px-4 py-2 text-base font-medium hover:scale-105`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600">Some of my recent work and contributions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group bg-white/90 backdrop-blur-sm border-0 shadow-xl relative min-h-[400px]"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                <div className="relative z-10 overflow-hidden">
                  <Image
                    src={project.image || "/globe.svg"}
                    alt={project.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        asChild
                        className="bg-white/90 hover:bg-white text-slate-800 shadow-lg"
                      >
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        asChild
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                      >
                        <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader className="relative z-10 pb-4">
                  <CardTitle className="text-2xl text-slate-800 font-bold">{project.name}</CardTitle>
                  <CardDescription className="text-slate-600 text-base">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 px-6 pb-8">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg border-0 shadow-md transition-all duration-300 px-3 py-1.5 text-sm font-medium hover:scale-105"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 border-2 border-slate-300 hover:bg-slate-50 bg-transparent text-slate-700 hover:border-slate-400 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Achievements
            </h2>
            <p className="text-xl text-slate-600">Milestones and accomplishments in my journey</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-8">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm border-0 shadow-xl group relative overflow-hidden min-h-[120px]"
                >
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                  
                  <CardContent className="flex items-center gap-6 p-8 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl text-slate-700 font-medium leading-relaxed">{achievement}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600">Let's connect and collaborate on exciting projects</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 shadow-xl relative overflow-hidden">
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
              
              <CardContent className="p-10 relative z-10">
                <div className="grid gap-8">
                  <div className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-300 hover:scale-105 shadow-md">
                    <div className="w-16 h-16 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full flex items-center justify-center shadow-lg">
                      <Github className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 text-xl mb-2">GitHub</h3>
                      <Link
                        href="https://github.com/yawhatev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg"
                      >
                        github.com/yawhatev
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105 shadow-md">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                      <Linkedin className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 text-xl mb-2">LinkedIn</h3>
                      <Link
                        href="https://www.linkedin.com/in/resima-budhathoki-033471311"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg"
                      >
                        linkedin.com/in/resima-budhathoki-033471311
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:scale-105 shadow-md">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 text-xl mb-2">Email</h3>
                      <Link
                        href="mailto:budhathokiresima@gmail.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-lg"
                      >
                        budhathokiresima@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-300">© 2024 Resima Budhathoki. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
