import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";

import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();

const skills = [
  ["Video Editing", "🎬", "Level 2", "68%"],
  ["Graphic Design", "🎨", "Level 1", "35%"],
  ["Coding", "💻", "Beginner", "20%"],
  ["Business", "💼", "Level 1", "42%"],
];

function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>
          SAATH • LEARN • BUILD • PROVE • GROW
        </Text>

        <Text style={styles.title}>Your future starts here.</Text>

        <Text style={styles.sub}>
          Learn useful skills, build real projects and create your Skill
          Passport.
        </Text>

        <Card style={styles.aiCard}>
          <Text style={styles.aiTitle}>✦ SAATH AI</Text>
          <Text style={styles.muted}>
            Ask, learn and plan — step by step.
          </Text>

          <Pressable
            style={styles.primaryButton}
            onPress={() => navigation.navigate("AI")}
          >
            <Text style={styles.primaryText}>Open SAATH AI</Text>
          </Pressable>
        </Card>

        <Text style={styles.section}>Today's Mission</Text>

        <Card>
          <Text style={styles.cardTitle}>
            🎬 Make a 15-second video edit
          </Text>

          <Text style={styles.muted}>
            Practice • Video Editing • 20 min
          </Text>

          <View style={styles.progress}>
            <View style={[styles.progressFill, { width: "65%" }]} />
          </View>

          <Text style={styles.small}>65% completed</Text>
        </Card>

        <Text style={styles.section}>Continue Learning</Text>

        <Card>
          <Text style={styles.cardTitle}>Video Editing Basics</Text>

          <Text style={styles.muted}>
            Lesson 7 of 12 • Cutting & Beat Sync
          </Text>

          <Pressable
            style={styles.secondaryButton}
            onPress={() => navigation.navigate("Learn")}
          >
            <Text style={styles.secondaryText}>Continue Lesson</Text>
          </Pressable>
        </Card>

        <Text style={styles.section}>Your Progress</Text>

        <View style={styles.stats}>
          <Card style={styles.stat}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.muted}>Lessons</Text>
          </Card>

          <Card style={styles.stat}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.muted}>Projects</Text>
          </Card>

          <Card style={styles.stat}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.muted}>Skills</Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Learn() {
  const subjects = [
    ["📐", "Maths", 55],
    ["🔬", "Science", 30],
    ["📖", "English", 72],
    ["💻", "Computer", 40],
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Learn</Text>

        <Text style={styles.sub}>
          School + real-world skills, in one place.
        </Text>

        <View style={styles.tabRow}>
          <Text style={styles.activeChip}>School</Text>
          <Text style={styles.chip}>Skills</Text>
        </View>

        {subjects.map((item) => (
          <Card key={item[1]}>
            <Text style={styles.cardTitle}>
              {item[0]} {item[1]}
            </Text>

            <Text style={styles.muted}>
              Learn → Practice → Quiz → Revision
            </Text>

            <View style={styles.progress}>
              <View
                style={[
                  styles.progressFill,
                  { width: `${item[2]}%` },
                ]}
              />
            </View>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function Skills() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Skills</Text>

        <Text style={styles.sub}>
          Build skills by doing real projects.
        </Text>

        {skills.map((item) => (
          <Card key={item[0]}>
            <View style={styles.row}>
              <Text style={styles.skillEmoji}>{item[1]}</Text>

              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{item[0]}</Text>

                <Text style={styles.muted}>
                  {item[2]} • {item[3]}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color="#8C93A8"
              />
            </View>

            <View style={styles.progress}>
              <View
                style={[
                  styles.progressFill,
                  { width: item[3] },
                ]}
              />
            </View>
          </Card>
        ))}

        <Card style={styles.highlight}>
          <Text style={styles.cardTitle}>📁 Project Lab</Text>

          <Text style={styles.muted}>
            Turn lessons into proof. Complete practical challenges
            and improve with feedback.
          </Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

function Passport() {
  const demonstratedSkills = [
    "Video Cutting",
    "Beat Sync",
    "Basic Design",
    "Communication",
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Skill Passport</Text>

        <Text style={styles.sub}>
          Your proof of learning — not just a certificate.
        </Text>

        <Card style={styles.passport}>
          <Text style={styles.passportLogo}>SAATH</Text>

          <Text style={styles.passportTitle}>
            Learner Passport
          </Text>

          <Text style={styles.muted}>
            Learning profile • V1
          </Text>

          <View style={styles.passportGrid}>
            <Text style={styles.bigNumber}>
              3
              <Text style={styles.unit}> Skills</Text>
            </Text>

            <Text style={styles.bigNumber}>
              4
              <Text style={styles.unit}> Projects</Text>
            </Text>

            <Text style={styles.bigNumber}>
              12
              <Text style={styles.unit}> Lessons</Text>
            </Text>

            <Text style={styles.bigNumber}>
              68%
              <Text style={styles.unit}> Best</Text>
            </Text>
          </View>
        </Card>

        <Text style={styles.section}>Demonstrated Skills</Text>

        {demonstratedSkills.map((skill) => (
          <Card key={skill}>
            <Text style={styles.cardTitle}>✓ {skill}</Text>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function Profile() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profile}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>S</Text>
          </View>

          <Text style={styles.title}>Learner</Text>

          <Text style={styles.muted}>
            Build your future, one skill at a time.
          </Text>
        </View>

        {[
          "⚙️ Settings",
          "🔐 Privacy & Safety",
          "👨‍👩‍👧 Guardian Mode",
          "🌐 Language",
          "🔔 Notifications",
          "❓ Help & Support",
        ].map((item) => (
          <Card key={item}>
            <Text style={styles.cardTitle}>{item}</Text>
          </Card>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

function AI() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>SAATH AI</Text>

        <Text style={styles.sub}>
          A learning guide that helps you understand and plan.
        </Text>

        {[
          "📚 Study — Explain a concept simply",
          "🛠️ Skill — Help me practice",
          "🧭 Plan — Give me my next steps",
        ].map((item) => (
          <Card key={item}>
            <Text style={styles.cardTitle}>{item}</Text>

            <Text style={styles.muted}>
              Demo mode in V1. Real AI connection will be added later.
            </Text>
          </Card>
        ))}

        <Card>
          <Text style={styles.cardTitle}>Try asking:</Text>

          <Text style={styles.example}>
            "Video editing सीखना शुरू करने के लिए मुझे क्या करना चाहिए?"
          </Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar style="light" />

      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarStyle: styles.tabBar,

          tabBarActiveTintColor: "#FFFFFF",

          tabBarInactiveTintColor: "#777F96",

          tabBarIcon: ({ color, size }) => {
            const icons = {
              Home: "home",
              Learn: "book",
              Skills: "construct",
              Passport: "ribbon",
              Profile: "person",
            };

            return (
              <Ionicons
                name={icons[route.name] || "sparkles"}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Learn" component={Learn} />
        <Tab.Screen name="Skills" component={Skills} />
        <Tab.Screen name="Passport" component={Passport} />
        <Tab.Screen name="Profile" component={Profile} />

        <Tab.Screen
          name="AI"
          component={AI}
          options={{
            tabBarButton: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#080B14",
  },

  container: {
    padding: 20,
    paddingBottom: 100,
  },

  eyebrow: {
    color: "#A3AAFF",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 12,
  },

  title: {
    color: "#F7F8FF",
    fontSize: 30,
    fontWeight: "900",
    marginBottom: 8,
  },

  sub: {
    color: "#9AA2B7",
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },

  section: {
    color: "#F7F8FF",
    fontSize: 19,
    fontWeight: "800",
    marginTop: 22,
    marginBottom: 10,
  },

  card: {
    backgroundColor: "#111625",
    borderRadius: 20,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#1D2437",
  },

  cardTitle: {
    color: "#F5F7FF",
    fontSize: 17,
    fontWeight: "800",
    marginBottom: 5,
  },

  muted: {
    color: "#8F98AE",
    fontSize: 13,
    lineHeight: 20,
  },

  aiCard: {
    backgroundColor: "#17162B",
  },

  aiTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 5,
  },

  primaryButton: {
    backgroundColor: "#7C83FF",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 15,
  },

  primaryText: {
    color: "#080B14",
    fontWeight: "900",
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: "#303951",
    padding: 13,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 14,
  },

  secondaryText: {
    color: "#DDE1FF",
    fontWeight: "800",
  },

  progress: {
    height: 7,
    backgroundColor: "#252C40",
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 14,
  },

  progressFill: {
    height: "100%",
    backgroundColor: "#8C93FF",
    borderRadius: 20,
  },

  small: {
    color: "#747E96",
    fontSize: 11,
    marginTop: 7,
  },

  stats: {
    flexDirection: "row",
    gap: 10,
  },

  stat: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
  },

  statNumber: {
    fontSize: 25,
    fontWeight: "900",
    color: "#F5F7FF",
    marginBottom: 3,
  },

  tabRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },

  activeChip: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#7C83FF",
    color: "#080B14",
    fontWeight: "900",
  },

  chip: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#303951",
    color: "#929AAF",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  skillEmoji: {
    fontSize: 30,
  },

  highlight: {
    borderColor: "#565D9A",
  },

  passport: {
    backgroundColor: "#15182A",
  },

  passportLogo: {
    color: "#AAB0FF",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 2,
  },

  passportTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "900",
    marginTop: 25,
  },

  passportGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 28,
    gap: 12,
  },

  bigNumber: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "900",
    width: "45%",
  },

  unit: {
    color: "#8992AA",
    fontSize: 12,
    fontWeight: "600",
  },

  example: {
    color: "#DDE1FF",
    fontSize: 15,
    lineHeight: 24,
    marginTop: 10,
  },

  profile: {
    alignItems: "center",
    marginBottom: 20,
  },

  avatar: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: "#7C83FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },

  avatarText: {
    fontSize: 32,
    fontWeight: "900",
    color: "#080B14",
  },

  tabBar: {
    backgroundColor: "#0D111D",
    borderTopColor: "#20273A",
    height: 65,
    paddingBottom: 7,
    paddingTop: 7,
  },
});
