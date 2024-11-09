'use client'
import {useAuth} from "@/app/context/AuthContext"
import {auth} from "../../firebase/firebaseConfig"
import {signOut} from "firebase/auth"
import {Button} from "@/app/shared/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/app/shared/ui/card"
import {getDatabase} from "firebase/database"

import {useRouter} from "next/navigation"
import {useEffect, useState} from "react"
import {Avatar, AvatarFallback, AvatarImage} from "@/app/shared/ui/avatar"
import {Badge} from "@/app/shared/ui/badge"
import {Progress} from "@/app/shared/ui/progress"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/app/shared/ui/tabs"
import {
  BookOpen,
  Eye,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin, MessageSquare,
  Rocket,
  Star,
  Trophy,
  UserPlus,
  Users
} from "lucide-react"
import {userProfileDetails} from "@/app/(pages)/profile/data/profileData";
import {UserProfileDetails} from "@/app/(pages)/profile/types/profileDetailTypes";


export default function Profile() {
  const {user} = useAuth()
  const [userDetails, setUserDetails] = useState<UserProfileDetails | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const db = getDatabase();



  const Logout = async () => {
    try {
      setIsLoading(true);
      await signOut(auth);
      setIsLoading(false);
      router.push('/');
    } catch (error) {

    }
  }
  useEffect(() => {
    if (!user) {
      router.push('/');
    } else {
      setUserDetails(userProfileDetails);
    }
  }, [user, router]);

  if (!user) return null;

  /**
   * Simple Layout for now with dummy TO DO after seth's push
   * */
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <div className="relative">
              <Avatar className="h-32 w-32">
                <AvatarImage alt={userProfileDetails.username} src="/placeholder.svg?height=128&width=128"/>
                <AvatarFallback>{userProfileDetails.username.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <Badge
                variant={userProfileDetails.isOnline ? "default" : "secondary"}
                className="absolute bottom-0 right-0 h-6 w-6 rounded-full p-1 bg-green-500"
              >
                <span className="sr-only">{userProfileDetails.isOnline ? "Online" : "Offline"}</span>
              </Badge>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center space-x-2 md:justify-start">
                <h1 className="text-3xl font-bold">{userProfileDetails.username} 👨‍💻</h1>
              </div>
              <p className="text-xl text-muted-foreground">{userProfileDetails.bio}</p>
              <div className="mt-2 flex items-center justify-center space-x-2 md:justify-start">
                <MapPin className="h-4 w-4"/>
                <span>{userProfileDetails.location}</span>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                <Button size="sm" variant={userProfileDetails.isFollowing ? "secondary" : "default"}>
                  {userProfileDetails.isFollowing ? "Following" : "Follow"}
                </Button>
                <Button size="sm" variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4"/>
                  Message
                </Button>
                <Button size="icon" variant="outline">
                  <Github className="h-4 w-4"/>
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button size="icon" variant="outline">
                  <Linkedin className="h-4 w-4"/>
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button size="icon" variant="outline">
                  <Mail className="h-4 w-4"/>
                  <span className="sr-only">Email</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 text-center sm:grid-cols-4">
            <div className="flex flex-col items-center">
              <Users className="mb-2 h-5 w-5"/>
              <span className="text-2xl font-bold">{userProfileDetails.followers}</span>
              <span className="text-sm text-muted-foreground">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <UserPlus className="mb-2 h-5 w-5"/>
              <span className="text-2xl font-bold">{userProfileDetails.following}</span>
              <span className="text-sm text-muted-foreground">Following</span>
            </div>
            <div className="flex flex-col items-center">
              <Eye className="mb-2 h-5 w-5"/>
              <span className="text-2xl font-bold">{userProfileDetails.watched}</span>
              <span className="text-sm text-muted-foreground">Watched</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="mb-2 h-5 w-5"/>
              <span className="text-2xl font-bold">{userProfileDetails.starred}</span>
              <span className="text-sm text-muted-foreground">Starred</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="about" className="space-y-4">
        <TabsList>
          <TabsTrigger value="about">About Me 🙋‍♂️</TabsTrigger>
          <TabsTrigger value="skills">Skills & Experience 💼</TabsTrigger>
          <TabsTrigger value="learning">Learning Journey 📚</TabsTrigger>
          <TabsTrigger value="community">Community 🤝</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>About Me 🙋‍♂️</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                {userProfileDetails.aboutMe}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Facts ⚡</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2">
                {userProfileDetails.quickFacts.map((quickFact, index) => (
                  <li key={index}>{quickFact}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills 🛠️</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                {userProfileDetails.skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="mt-2"/>
                  </div>
                ))}
              </div>

            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Experience 💼</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userProfileDetails.experience.map((job, index) => (
                  <div key={index}>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.date}</p>
                    <ul className="mt-2 list-inside list-disc">
                      {job.details.map((task, taskIndex) => (
                        <li key={taskIndex}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="learning" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Current Learning Goals 🎯</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-inside list-disc space-y-2">
                {userProfileDetails.learningGoals.map((learningGoals, index) => (
                  <li key={index}>{learningGoals}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Learning Resources 📚</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="flex items-center font-semibold">
                    <BookOpen className="mr-2 h-5 w-5"/>
                    Favorite Books
                  </h3>
                  <ul className="mt-2 list-inside list-disc ">
                    {userProfileDetails.favoriteBooks.map((favoriteBooks, index) => (
                      <li key={index}>{favoriteBooks}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="flex items-center font-semibold">
                    <Rocket className="mr-2 h-5 w-5"/>
                    Online Courses
                  </h3>
                  <ul className="mt-2 list-inside list-disc ">
                    {userProfileDetails.onlineCourses.map((onlineCourses, index) => (
                      <li key={index}>{onlineCourses}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certifications 🏆</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {userProfileDetails.certifications.map((certification, index) => (
                  <Badge key={index}>{certification}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="community" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Community Involvement 🤝</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userProfileDetails.communityInvolvement.map((item, index) => {
                  return (
                    <div key={index}>
                      <h3 className="flex items-center font-semibold">
                        {item.title}
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  );
                })}
              </div>

            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Open Source Contributions 🌟</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userProfileDetails.openSourceContributions.map((contribution, index) => (
                  <div key={index}>
                    <h3 className="font-semibold">{contribution.title}</h3>
                    <p className="text-sm text-muted-foreground">{contribution.description}</p>
                  </div>
                ))}
              </div>

            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Let's Connect! 🎉</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{userProfileDetails.connectionMessage}</p>
              <div className="mt-4 flex justify-center space-x-4">
                <Button>Send Message 💬</Button>
                <Button variant="outline">Follow 🤝</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}