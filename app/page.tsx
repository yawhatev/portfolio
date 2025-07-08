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
  Other: ["Problem Solving", "Team Collaboration"],
}

const projects = [
  {
    id: 1,
    name: "E-Commerce Website",
    description: "A full-stack e-commerce platform built with modern web technologies",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/resimabudhathoki/ecommerce-project",
    liveDemo: "https://your-ecommerce-demo.vercel.app",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    name: "Weather App",
    description: "A responsive weather application with real-time data and forecasts",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/resimabudhathoki/weather-app",
    liveDemo: "https://your-weather-app.vercel.app",
    technologies: ["Python", "JavaScript", "CSS"],
  },
  {
    id: 3,
    name: "Task Management System",
    description: "A collaborative task management tool for teams and individuals",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/resimabudhathoki/task-manager",
    liveDemo: "https://your-task-manager.vercel.app",
    technologies: ["JavaScript", "HTML", "CSS"],
  },
  {
    id: 4,
    name: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills",
    image: "/placeholder.svg?height=200&width=300",
    github: "https://github.com/resimabudhathoki/portfolio",
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
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resima Budhathoki
            </h1>
            <div className="flex gap-6">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                About
              </a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Skills
              </a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Projects
              </a>
              <a href="#achievements" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Achievements
              </a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="relative py-20 overflow-hidden">
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
              <div className="flex justify-center">
                <div className="relative">
                  {/* Decorative rings */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-lg animate-pulse"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-30 blur-md"></div>

                  {/* Main profile picture */}
                  <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                    <Image
                      src="/placeholder.svg?height=288&width=288"
                      alt="Resima Budhathoki Profile Picture"
                      width={288}
                      height={288}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
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
                    A passionate computer engineering student and aspiring web developer. I enjoy building{" "}
                    <span className="text-blue-600 font-semibold">real-world projects</span> and learning new
                    technologies that help solve everyday problems. My journey so far has taken me through various
                    programming languages and platforms, and I am always eager to{" "}
                    <span className="text-purple-600 font-semibold">explore and grow</span> as a developer.
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
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View My Work
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
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 justify-center lg:justify-start">
                  <Link
                    href="https://github.com/resimabudhathoki"
                    className="w-12 h-12 bg-slate-100 hover:bg-slate-800 text-slate-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href="https://linkedin.com/in/resimabudhathoki"
                    className="w-12 h-12 bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                  </Link>
                  <Link
                    href="mailto:resima.budhathoki@example.com"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card
                key={category}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 hover:from-blue-100 hover:to-purple-100 border-0 shadow-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group bg-white/80 backdrop-blur-sm border-0 shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
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

                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{project.name}</CardTitle>
                  <CardDescription className="text-slate-600">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-blue-200 text-blue-700 hover:bg-blue-50"
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
                      className="flex-1 border-slate-200 hover:bg-slate-50 bg-transparent"
                    >
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
                >
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-slate-700">{achievement}</p>
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

          <div className="max-w-2xl mx-auto">
            <Card className="hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid gap-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 hover:from-slate-100 hover:to-slate-200 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-900 rounded-full flex items-center justify-center shadow-lg">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800">GitHub</h3>
                      <Link
                        href="https://github.com/resimabudhathoki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                      >
                        github.com/resimabudhathoki
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800">LinkedIn</h3>
                      <Link
                        href="https://linkedin.com/in/resimabudhathoki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                      >
                        linkedin.com/in/resimabudhathoki
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800">Email</h3>
                      <Link
                        href="mailto:resima.budhathoki@example.com"
                        className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
                      >
                        resima.budhathoki@example.com
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
