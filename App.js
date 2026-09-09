import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
  Alert,
  Switch,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const light = {
  bg: "#F6F7FB",
  card: "#FFFFFF",
  text: "#15162B",
  sub: "#73758A",
  border: "#E8E9F1",
};

const dark = {
  bg: "#080B14",
  card: "#12182A",
  text: "#FFFFFF",
  sub: "#A7ACC2",
  border: "#252C40",
};

function Header({ title, sub, theme }) {
  return (
    <View style={styles.header}>
      <View>
        <Text style={[styles.headerTitle, { color: theme.text }]}>
          {title}
        </Text>
        {sub && (
          <Text style={[styles.headerSub, { color: theme.sub }]}>
            {sub}
          </Text>
        )}
      </View>

      <View style={styles.logoSmall}>
        <Text style={styles.logoText}>S</Text>
      </View>
    </View>
  );
}

function Home({ theme, setTab }) {
  return (
    <ScrollView
      style={{ backgroundColor: theme.bg }}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Header
        title="Good evening 👋"
        sub="Welcome back to SAATH"
        theme={theme}
      />

      <View style={styles.hero}>
        <View style={{ flex: 1 }}>
          <Text style={styles.heroSmall}>YOUR JOURNEY</Text>
          <Text style={styles.heroTitle}>
            Learn. Build.
            {"\n"}Grow. 🚀
          </Text>
          <Text style={styles.heroSub}>
            Turn your skills into real proof.
          </Text>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setTab("Learn")}
          >
            <Text style={styles.primaryButtonText}>Continue Learning</Text>
            <Ionicons name="arrow-forward" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.progressCircle}>
          <Text style={styles.progressNumber}>68%</Text>
          <Text style={styles.progressLabel}>Progress</Text>
        </View>
      </View>

      <View style={styles.statsRow}>
        <View style={[styles.statCard, { backgroundColor: "#EEF0FF" }]}>
          <Text style={styles.statEmoji}>🔥</Text>
          <Text style={[styles.statNumber, { color: "#635BFF" }]}>7</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>

        <View style={[styles.statCard, { backgroundColor: "#E9FAF2" }]}>
          <Text style={styles.statEmoji}>⚡</Text>
          <Text style={[styles.statNumber, { color: "#16A66A" }]}>420</Text>
          <Text style={styles.statLabel}>XP Earned</Text>
        </View>

        <View style={[styles.statCard, { backgroundColor: "#FFF4E5" }]}>
          <Text style={styles.statEmoji}>🏆</Text>
          <Text style={[styles.statNumber, { color: "#E99A00" }]}>4</Text>
          <Text style={styles.statLabel}>Badges</Text>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Continue Learning
      </Text>

      <TouchableOpacity
        style={[styles.courseCard, { backgroundColor: theme.card }]}
        onPress={() =>
          Alert.alert("Web Development", "Course opened! 🚀")
        }
      >
        <View style={[styles.courseIcon, { backgroundColor: "#EDE9FE" }]}>
          <Text style={{ fontSize: 25 }}>💻</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={[styles.courseTitle, { color: theme.text }]}>
            Web Development
          </Text>
          <Text style={[styles.courseSub, { color: theme.sub }]}>
            HTML • CSS • JavaScript
          </Text>

          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: "68%" }]} />
          </View>

          <Text style={styles.progressText}>68% completed</Text>
        </View>
      </TouchableOpacity>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Your Next Step
      </Text>

      <TouchableOpacity
        style={[styles.nextCard, { backgroundColor: "#161B33" }]}
        onPress={() =>
          Alert.alert(
            "Project Lab",
            "Build a mini website and add it to your Skill Passport."
          )
        }
      >
        <Text style={styles.nextEmoji}>🧪</Text>

        <View style={{ flex: 1 }}>
          <Text style={styles.nextTitle}>Build your first project</Text>
          <Text style={styles.nextSub}>
            Practice → Project → Proof
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={22} color="#fff" />
      </TouchableOpacity>

      <View style={styles.aiCard}>
        <View style={styles.aiIcon}>
          <Text style={{ fontSize: 25 }}>🤖</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.aiTitle}>SAATH AI</Text>
          <Text style={styles.aiSub}>
            Ask. Learn. Understand.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.aiButton}
          onPress={() => Alert.alert("SAATH AI", "AI assistant coming next! 🤖")}
        >
          <Text style={styles.aiButtonText}>OPEN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function Learn({ theme }) {
  const [selected, setSelected] = useState(null);

  const courses = [
    {
      title: "Web Development",
      sub: "HTML • CSS • JavaScript",
      icon: "💻",
      color: "#635BFF",
      progress: 68,
    },
    {
      title: "Video Editing",
      sub: "Reels • Shorts • YouTube",
      icon: "🎬",
      color: "#EC4899",
      progress: 35,
    },
    {
      title: "Digital Marketing",
      sub: "Content • Branding • Ads",
      icon: "📈",
      color: "#F59E0B",
      progress: 20,
    },
    {
      title: "Graphic Design",
      sub: "Posters • Logos • Social Media",
      icon: "🎨",
      color: "#06B6D4",
      progress: 10,
    },
  ];

  if (selected) {
    return (
      <ScrollView
        style={{ backgroundColor: theme.bg }}
        contentContainerStyle={styles.container}
      >
        <TouchableOpacity onPress={() => setSelected(null)}>
          <Text style={styles.backText}>← Back to courses</Text>
        </TouchableOpacity>

        <View style={styles.detailIcon}>
          <Text style={{ fontSize: 45 }}>{selected.icon}</Text>
        </View>

        <Text style={[styles.detailTitle, { color: theme.text }]}>
          {selected.title}
        </Text>

        <Text style={[styles.detailSub, { color: theme.sub }]}>
          {selected.sub}
        </Text>

        <View style={[styles.lessonCard, { backgroundColor: theme.card }]}>
          <Text style={[styles.lessonNumber, { color: selected.color }]}>
            LESSON 01
          </Text>
          <Text style={[styles.lessonTitle, { color: theme.text }]}>
            Getting Started
          </Text>
          <Text style={[styles.lessonText, { color: theme.sub }]}>
            Learn the basics and understand how this skill works in the real
            world.
          </Text>

          <TouchableOpacity
            style={[styles.primaryWide, { backgroundColor: selected.color }]}
            onPress={() =>
              Alert.alert(
                "Lesson Complete 🎉",
                "+50 XP added to your learning journey!"
              )
            }
          >
            <Text style={styles.primaryButtonText}>Complete Lesson</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.lessonCard, { backgroundColor: theme.card }]}>
          <Text style={[styles.lessonNumber, { color: selected.color }]}>
            LESSON 02
          </Text>
          <Text style={[styles.lessonTitle, { color: theme.text }]}>
            Practice Challenge
          </Text>
          <Text style={[styles.lessonText, { color: theme.sub }]}>
            Complete a small practical task and prove what you learned.
          </Text>

          <TouchableOpacity
            style={styles.outlineButton}
            onPress={() => Alert.alert("Challenge", "Challenge started! 🚀")}
          >
            <Text style={styles.outlineText}>Start Challenge</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={{ backgroundColor: theme.bg }}
      contentContainerStyle={styles.container}
    >
      <Header
        title="Learn 📚"
        sub="Build skills that actually matter"
        theme={theme}
      />

      {courses.map((course, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.bigCourse, { backgroundColor: theme.card }]}
          onPress={() => setSelected(course)}
        >
          <View
            style={[styles.bigCourseIcon, { backgroundColor: course.color }]}
          >
            <Text style={{ fontSize: 27 }}>{course.icon}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.courseTitle, { color: theme.text }]}>
              {course.title}
            </Text>
            <Text style={[styles.courseSub, { color: theme.sub }]}>
              {course.sub}
            </Text>

            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${course.progress}%`,
                    backgroundColor: course.color,
                  },
                ]}
              />
            </View>

            <Text style={[styles.progressText, { color: course.color }]}>
              {course.progress}% complete
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color={theme.sub}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function Skills({ theme }) {
  const [started, setStarted] = useState([]);

  const skills = [
    ["💻", "Coding", "Beginner", "#635BFF"],
    ["🎬", "Video Editing", "Intermediate", "#EC4899"],
    ["🎨", "Design", "Beginner", "#06B6D4"],
    ["📢", "Marketing", "Beginner", "#F59E0B"],
    ["🗣️", "Communication", "Beginner", "#16A66A"],
    ["💡", "Business", "Beginner", "#8B5CF6"],
  ];

  const toggleSkill = (name) => {
    if (started.includes(name)) {
      setStarted(started.filter((x) => x !== name));
    } else {
      setStarted([...started, name]);
    }
  };

  return (
    <ScrollView
      style={{ backgroundColor: theme.bg }}
      contentContainerStyle={styles.container}
    >
      <Header
        title="My Skills ⚡"
        sub="Discover what you can build"
        theme={theme}
      />

      <View style={styles.skillBanner}>
        <Text style={styles.skillBannerTitle}>Your Skill Level</Text>
        <Text style={styles.skillBannerNumber}>Beginner → Builder</Text>
        <Text style={styles.skillBannerSub}>
          Keep practicing to unlock new levels.
        </Text>
      </View>

      <View style={styles.skillGrid}>
        {skills.map((skill, index) => {
          const active = started.includes(skill[1]);

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.skillCard,
                { backgroundColor: theme.card },
              ]}
              onPress={() => toggleSkill(skill[1])}
            >
              <View
                style={[
                  styles.skillIcon,
                  { backgroundColor: skill[3] },
                ]}
              >
                <Text style={{ fontSize: 24 }}>{skill[0]}</Text>
              </View>

              <Text style={[styles.skillName, { color: theme.text }]}>
                {skill[1]}
              </Text>

              <Text style={[styles.skillLevel, { color: skill[3] }]}>
                {active ? "In Progress" : skill[2]}
              </Text>

              <View
                style={[
                  styles.skillAction,
                  active && { backgroundColor: skill[3] },
                ]}
              >
                <Text
                  style={[
                    styles.skillActionText,
                    active && { color: "#fff" },
                  ]}
                >
                  {active ? "Started ✓" : "Start"}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.projectLab}>
        <Text style={styles.projectEmoji}>🧪</Text>

        <View style={{ flex: 1 }}>
          <Text style={styles.projectTitle}>Project Lab</Text>
          <Text style={styles.projectSub}>
            Build something real and add proof to your Passport.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            Alert.alert(
              "Project Lab",
              "Choose a skill and build your first project!"
            )
          }
        >
          <Ionicons name="arrow-forward-circle" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function Passport({ theme }) {
  return (
    <ScrollView
      style={{ backgroundColor: theme.bg }}
      contentContainerStyle={styles.container}
    >
      <Header
        title="Skill Passport 🪪"
        sub="Your proof of learning"
        theme={theme}
      />

      <View style={styles.passport}>
        <View style={styles.passportTop}>
          <View style={styles.passportLogo}>
            <Text style={styles.passportLogoText}>S</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.passportBrand}>SAATH</Text>
            <Text style={styles.passportSmall}>SKILL PASSPORT</Text>
          </View>

          <Text style={styles.passportVerified}>✓</Text>
        </View>

        <Text style={styles.passportName}>Your Learning Profile</Text>

        <View style={styles.passportStats}>
          <View>
            <Text style={styles.passportStatNum}>420</Text>
            <Text style={styles.passportStatLabel}>XP</Text>
          </View>

          <View>
            <Text style={styles.passportStatNum}>4</Text>
            <Text style={styles.passportStatLabel}>Skills</Text>
          </View>

          <View>
            <Text style={styles.passportStatNum}>3</Text>
            <Text style={styles.passportStatLabel}>Projects</Text>
          </View>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Verified Skills
      </Text>

      {[
        ["💻", "Web Development", "Intermediate", "#635BFF"],
        ["🎬", "Video Editing", "Intermediate", "#EC4899"],
        ["🎨", "Graphic Design", "Beginner", "#06B6D4"],
        ["📢", "Digital Marketing", "Beginner", "#F59E0B"],
      ].map((item, index) => (
        <View
          key={index}
          style={[styles.passportSkill, { backgroundColor: theme.card }]}
        >
          <View
            style={[styles.passportSkillIcon, { backgroundColor: item[3] }]}
          >
            <Text style={{ fontSize: 21 }}>{item[0]}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.skillName, { color: theme.text }]}>
              {item[1]}
            </Text>
            <Text style={[styles.skillLevel, { color: item[3] }]}>
              {item[2]}
            </Text>
          </View>

          <Text style={styles.checkBadge}>✓</Text>
        </View>
      ))}

      <TouchableOpacity
        style={styles.downloadButton}
        onPress={() =>
          Alert.alert(
            "Skill Passport",
            "Your digital passport is ready to share! 🪪"
          )
        }
      >
        <Ionicons name="share-social" size={19} color="#fff" />
        <Text style={styles.primaryButtonText}>Share Passport</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

function Profile({ theme, darkMode, setDarkMode }) {
  const [name, setName] = useState("SAATH Learner");
  const [editing, setEditing] = useState(false);

  return (
    <ScrollView
      style={{ backgroundColor: theme.bg }}
      contentContainerStyle={styles.container}
    >
      <Header
        title="Profile 👤"
        sub="Manage your learning journey"
        theme={theme}
      />

      <View style={[styles.profileCard, { backgroundColor: theme.card }]}>
        <View style={styles.avatar}>
          <Text style={{ fontSize: 32 }}>👨‍💻</Text>
        </View>

        {editing ? (
          <TextInput
            value={name}
            onChangeText={setName}
            style={[
              styles.nameInput,
              {
                color: theme.text,
                borderColor: theme.border,
              },
            ]}
          />
        ) : (
          <Text style={[styles.profileName, { color: theme.text }]}>
            {name}
          </Text>
        )}

        <Text style={[styles.profileSub, { color: theme.sub }]}>
          Learning • Building • Growing
        </Text>

        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setEditing(!editing)}
        >
          <Text style={styles.editButtonText}>
            {editing ? "Save Profile" : "Edit Profile"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.settingCard, { backgroundColor: theme.card }]}>
        <View style={styles.settingRow}>
          <View style={styles.settingIcon}>
            <Ionicons name="moon" size={20} color="#635BFF" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.settingTitle, { color: theme.text }]}>
              Dark Mode
            </Text>
            <Text style={[styles.settingSub, { color: theme.sub }]}>
              Easier on the eyes at night
            </Text>
          </View>

          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
          />
        </View>
      </View>

      {[
        ["🎯", "My Goals", "Set your learning goals"],
        ["🏆", "Achievements", "View your badges"],
        ["🔒", "Privacy & Safety", "Manage your privacy"],
        ["❓", "Help & Support", "Get help from SAATH"],
      ].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.menuRow, { backgroundColor: theme.card }]}
          onPress={() => Alert.alert(item[1], item[2])}
        >
          <Text style={{ fontSize: 22 }}>{item[0]}</Text>

          <View style={{ flex: 1 }}>
            <Text style={[styles.settingTitle, { color: theme.text }]}>
              {item[1]}
            </Text>
            <Text style={[styles.settingSub, { color: theme.sub }]}>
              {item[2]}
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color={theme.sub}
          />
        </TouchableOpacity>
      ))}

      <Text style={styles.version}>SAATH • Learn • Build • Prove • Grow</Text>
    </ScrollView>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? dark : light;

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={darkMode ? "light-content" : "dark-content"}
        backgroundColor={theme.bg}
      />

      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 70,
            paddingBottom: 9,
            paddingTop: 7,
            backgroundColor: theme.card,
            borderTopColor: theme.border,
          },
          tabBarActiveTintColor: "#635BFF",
          tabBarInactiveTintColor: theme.sub,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "700",
          },
          tabBarIcon: ({ color, size }) => {
            let icon = "home";

            if (route.name === "Home") icon = "home";
            if (route.name === "Learn") icon = "book";
            if (route.name === "Skills") icon = "flash";
            if (route.name === "Passport") icon = "ribbon";
            if (route.name === "Profile") icon = "person";

            return (
              <Ionicons
                name={icon}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home">
          {(props) => (
            <Home
              {...props}
              theme={theme}
              setTab={(tab) => props.navigation.navigate(tab)}
            />
          )}
        </Tab.Screen>

        <Tab.Screen name="Learn">
          {(props) => <Learn {...props} theme={theme} />}
        </Tab.Screen>

        <Tab.Screen name="Skills">
          {(props) => <Skills {...props} theme={theme} />}
        </Tab.Screen>

        <Tab.Screen name="Passport">
          {(props) => <Passport {...props} theme={theme} />}
        </Tab.Screen>

        <Tab.Screen name="Profile">
          {(props) => (
            <Profile
              {...props}
              theme={theme}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 35,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
    paddingTop: 8,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "900",
  },

  headerSub: {
    fontSize: 13,
    marginTop: 4,
    fontWeight: "600",
  },

  logoSmall: {
    width: 44,
    height: 44,
    borderRadius: 15,
    backgroundColor: "#635BFF",
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
  },

  hero: {
    backgroundColor: "#635BFF",
    borderRadius: 28,
    padding: 22,
    flexDirection: "row",
    minHeight: 245,
    overflow: "hidden",
  },

  heroSmall: {
    color: "#DCD9FF",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 32,
    lineHeight: 36,
    fontWeight: "900",
    marginTop: 8,
  },

  heroSub: {
    color: "#E7E5FF",
    fontSize: 13,
    marginTop: 8,
    maxWidth: 180,
  },

  primaryButton: {
    backgroundColor: "#17152D",
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 18,
    alignSelf: "flex-start",
  },

  primaryWide: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 15,
  },

  primaryButtonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "800",
  },

  progressCircle: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 7,
    borderColor: "#A8A3FF",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  progressNumber: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "900",
  },

  progressLabel: {
    color: "#DDD9FF",
    fontSize: 9,
    fontWeight: "700",
  },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 14,
  },

  statCard: {
    flex: 1,
    borderRadius: 18,
    padding: 13,
    minHeight: 105,
  },

  statEmoji: {
    fontSize: 18,
  },

  statNumber: {
    fontSize: 22,
    fontWeight: "900",
    marginTop: 4,
  },

  statLabel: {
    color: "#74778A",
    fontSize: 10,
    fontWeight: "700",
    marginTop: 2,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "900",
    marginTop: 25,
    marginBottom: 12,
  },

  courseCard: {
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
    gap: 13,
    elevation: 3,
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  courseIcon: {
    width: 55,
    height: 55,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },

  courseTitle: {
    fontSize: 15,
    fontWeight: "900",
  },

  courseSub: {
    fontSize: 11,
    marginTop: 3,
    fontWeight: "600",
  },

  progressBar: {
    height: 7,
    borderRadius: 10,
    backgroundColor: "#E8E9F1",
    overflow: "hidden",
    marginTop: 10,
  },

  progressFill: {
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#635BFF",
  },

  progressText: {
    fontSize: 10,
    fontWeight: "800",
    marginTop: 5,
    color: "#635BFF",
  },

  nextCard: {
    borderRadius: 20,
    padding: 17,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
  },

  nextEmoji: {
    fontSize: 29,
  },

  nextTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
  },

  nextSub: {
    color: "#AEB4D0",
    fontSize: 11,
    marginTop: 4,
  },

  aiCard: {
    backgroundColor: "#EC4899",
    borderRadius: 21,
    padding: 15,
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  aiIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  aiTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },

  aiSub: {
    color: "#FFE3F1",
    fontSize: 11,
    marginTop: 3,
  },

  aiButton: {
    backgroundColor: "#fff",
    borderRadius: 11,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },

  aiButtonText: {
    color: "#EC4899",
    fontSize: 10,
    fontWeight: "900",
  },

  bigCourse: {
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    elevation: 2,
  },

  bigCourseIcon: {
    width: 58,
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  backText: {
    color: "#635BFF",
    fontWeight: "800",
    marginBottom: 20,
  },

  detailIcon: {
    width: 90,
    height: 90,
    borderRadius: 28,
    backgroundColor: "#EDE9FE",
    justifyContent: "center",
    alignItems: "center",
  },

  detailTitle: {
    fontSize: 29,
    fontWeight: "900",
    marginTop: 15,
  },

  detailSub: {
    fontSize: 13,
    marginTop: 5,
  },

  lessonCard: {
    borderRadius: 20,
    padding: 18,
    marginTop: 15,
    elevation: 2,
  },

  lessonNumber: {
    fontSize: 10,
    fontWeight: "900",
  },

  lessonTitle: {
    fontSize: 18,
    fontWeight: "900",
    marginTop: 7,
  },

  lessonText: {
    fontSize: 12,
    lineHeight: 19,
    marginTop: 7,
  },

  outlineButton: {
    borderWidth: 1.5,
    borderColor: "#635BFF",
    borderRadius: 14,
    paddingVertical: 13,
    alignItems: "center",
    marginTop: 15,
  },

  outlineText: {
    color: "#635BFF",
    fontWeight: "900",
    fontSize: 13,
  },

  skillBanner: {
    backgroundColor: "#635BFF",
    borderRadius: 23,
    padding: 20,
    marginBottom: 15,
  },

  skillBannerTitle: {
    color: "#DCD9FF",
    fontSize: 11,
    fontWeight: "800",
  },

  skillBannerNumber: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
    marginTop: 5,
  },

  skillBannerSub: {
    color: "#DCD9FF",
    fontSize: 11,
    marginTop: 5,
  },

  skillGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  skillCard: {
    width: "48%",
    borderRadius: 20,
    padding: 14,
    marginBottom: 12,
    elevation: 2,
  },

  skillIcon: {
    width: 50,
    height: 50,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  skillName: {
    fontSize: 14,
    fontWeight: "900",
    marginTop: 10,
  },

  skillLevel: {
    fontSize: 10,
    fontWeight: "800",
    marginTop: 4,
  },

  skillAction: {
    backgroundColor: "#F0F1F6",
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 11,
  },

  skillActionText: {
    color: "#55586D",
    fontSize: 10,
    fontWeight: "900",
  },

  projectLab: {
    backgroundColor: "#11162A",
    borderRadius: 21,
    padding: 17,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 5,
  },

  projectEmoji: {
    fontSize: 28,
  },

  projectTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "900",
  },

  projectSub: {
    color: "#A8AEC5",
    fontSize: 10,
    lineHeight: 16,
    marginTop: 4,
  },

  passport: {
    backgroundColor: "#151A35",
    borderRadius: 26,
    padding: 20,
    minHeight: 250,
  },

  passportTop: {
    flexDirection: "row",
    alignItems: "center",
  },

  passportLogo: {
    width: 50,
    height: 50,
    borderRadius: 16,
    backgroundColor: "#635BFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  passportLogoText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "900",
  },

  passportBrand: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "900",
  },

  passportSmall: {
    color: "#8F96B4",
    fontSize: 8,
    fontWeight: "800",
    marginTop: 2,
  },

  passportVerified: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#16A66A",
    color: "#fff",
    textAlign: "center",
    lineHeight: 28,
    fontWeight: "900",
  },

  passportName: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "900",
    marginTop: 35,
  },

  passportStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  passportStatNum: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
  },

  passportStatLabel: {
    color: "#9097B6",
    fontSize: 9,
    fontWeight: "800",
    marginTop: 2,
  },

  passportSkill: {
    borderRadius: 18,
    padding: 13,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
  },

  passportSkillIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  checkBadge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#16A66A",
    color: "#fff",
    textAlign: "center",
    lineHeight: 26,
    fontWeight: "900",
  },

  downloadButton: {
    backgroundColor: "#635BFF",
    borderRadius: 15,
    paddingVertical: 14,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginTop: 7,
  },

  profileCard: {
    borderRadius: 23,
    padding: 20,
    alignItems: "center",
    elevation: 2,
  },

  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#EDE9FE",
    justifyContent: "center",
    alignItems: "center",
  },

  profileName: {
    fontSize: 21,
    fontWeight: "900",
    marginTop: 12,
  },

  profileSub: {
    fontSize: 11,
    marginTop: 4,
  },

  editButton: {
    backgroundColor: "#635BFF",
    borderRadius: 12,
    paddingHorizontal: 17,
    paddingVertical: 10,
    marginTop: 13,
  },

  editButtonText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "900",
  },

  nameInput: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 12,
    width: "80%",
    textAlign: "center",
  },

  settingCard: {
    borderRadius: 20,
    padding: 16,
    marginTop: 15,
  },

  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  settingIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#EDE9FE",
    justifyContent: "center",
    alignItems: "center",
  },

  settingTitle: {
    fontSize: 14,
    fontWeight: "900",
  },

  settingSub: {
    fontSize: 10,
    marginTop: 3,
  },

  menuRow: {
    borderRadius: 18,
    padding: 15,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  version: {
    textAlign: "center",
    color: "#85899C",
    fontSize: 10,
    marginTop: 25,
    marginBottom: 10,
    fontWeight: "700",
  },
});
