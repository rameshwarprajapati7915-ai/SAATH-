import React, { useMemo, useState } from "react";
import {
  Alert,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const COLORS = {
  light: {
    bg: "#F7F8FC",
    surface: "#FFFFFF",
    surface2: "#F0F2F7",
    text: "#111827",
    muted: "#6B7280",
    border: "#E5E7EB",
    primary: "#635BFF",
    primarySoft: "#EEECFF",
    green: "#16A34A",
    orange: "#F59E0B",
    red: "#EF4444",
  },
  dark: {
    bg: "#0B0D12",
    surface: "#14171E",
    surface2: "#1B1F28",
    text: "#F5F7FA",
    muted: "#9CA3AF",
    border: "#272C36",
    primary: "#8178FF",
    primarySoft: "#211E3E",
    green: "#4ADE80",
    orange: "#FBBF24",
    red: "#F87171",
  },
};

function ProgressBar({ value, colors }) {
  return (
    <View style={[styles.progressTrack, { backgroundColor: colors.surface2 }]}>
      <View
        style={[
          styles.progressFill,
          { width: `${value}%`, backgroundColor: colors.primary },
        ]}
      />
    </View>
  );
}

function SectionTitle({ title, action, onPress, colors }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, { color: colors.text }]}>{title}</Text>
      {action && (
        <Pressable onPress={onPress}>
          <Text style={[styles.actionText, { color: colors.primary }]}>
            {action}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

function HomeScreen({ navigation, colors }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.page}
    >
      <View style={styles.topRow}>
        <View>
          <Text style={[styles.eyebrow, { color: colors.muted }]}>
            WELCOME BACK
          </Text>
          <Text style={[styles.heading, { color: colors.text }]}>
            Build your future.
          </Text>
        </View>

        <Pressable
          style={[styles.avatar, { backgroundColor: colors.primarySoft }]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={[styles.avatarText, { color: colors.primary }]}>A</Text>
        </Pressable>
      </View>

      <View
        style={[
          styles.hero,
          {
            backgroundColor: colors.surface,
            borderColor: colors.border,
          },
        ]}
      >
        <View style={styles.heroBadge}>
          <Ionicons name="sparkles" size={15} color={colors.primary} />
          <Text style={[styles.heroBadgeText, { color: colors.primary }]}>
            TODAY'S MISSION
          </Text>
        </View>

        <Text style={[styles.heroTitle, { color: colors.text }]}>
          Create a 15-second video edit
        </Text>

        <Text style={[styles.body, { color: colors.muted }]}>
          Practice one real skill today and add your progress to your Skill
          Passport.
        </Text>

        <Pressable
          style={[styles.primaryButton, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate("Skills")}
        >
          <Text style={styles.primaryButtonText}>Start Mission</Text>
          <Ionicons name="arrow-forward" size={18} color="#fff" />
        </Pressable>
      </View>

      <SectionTitle title="Your progress" colors={colors} />

      <View style={styles.statsRow}>
        {[
          ["3", "Skills"],
          ["4", "Projects"],
          ["12", "Lessons"],
        ].map(([value, label]) => (
          <View
            key={label}
            style={[
              styles.statBox,
              { backgroundColor: colors.surface, borderColor: colors.border },
            ]}
          >
            <Text style={[styles.statValue, { color: colors.text }]}>
              {value}
            </Text>
            <Text style={[styles.statLabel, { color: colors.muted }]}>
              {label}
            </Text>
          </View>
        ))}
      </View>

      <SectionTitle
        title="Continue learning"
        action="View all"
        colors={colors}
        onPress={() => navigation.navigate("Learn")}
      />

      <Pressable
        style={[
          styles.courseRow,
          { backgroundColor: colors.surface, borderColor: colors.border },
        ]}
        onPress={() =>
          Alert.alert(
            "Video Editing",
            "Continue your next lesson from where you left off."
          )
        }
      >
        <View style={[styles.courseIcon, { backgroundColor: colors.primarySoft }]}>
          <Ionicons name="videocam" size={22} color={colors.primary} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={[styles.courseTitle, { color: colors.text }]}>
            Video Editing
          </Text>
          <Text style={[styles.courseMeta, { color: colors.muted }]}>
            12 lessons • Intermediate
          </Text>
          <ProgressBar value={68} colors={colors} />
        </View>

        <Text style={[styles.percent, { color: colors.primary }]}>68%</Text>
      </Pressable>

      <SectionTitle title="Quick access" colors={colors} />

      <View style={styles.quickGrid}>
        <QuickAction
          icon="sparkles-outline"
          title="SAATH AI"
          subtitle="Ask anything"
          colors={colors}
          onPress={() => navigation.navigate("AI")}
        />

        <QuickAction
          icon="flask-outline"
          title="Project Lab"
          subtitle="Build & prove"
          colors={colors}
          onPress={() =>
            Alert.alert(
              "Project Lab",
              "Choose a project from your Skills section and start building."
            )
          }
        />

        <QuickAction
          icon="ribbon-outline"
          title="Passport"
          subtitle="Your proof"
          colors={colors}
          onPress={() => navigation.navigate("Passport")}
        />

        <QuickAction
          icon="trending-up-outline"
          title="Growth Path"
          subtitle="What's next?"
          colors={colors}
          onPress={() =>
            Alert.alert(
              "Growth Path",
              "Keep practicing your strongest skill, then build a project to prove it."
            )
          }
        />
      </View>
    </ScrollView>
  );
}

function QuickAction({ icon, title, subtitle, colors, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.quickCard,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
    >
      <Ionicons name={icon} size={23} color={colors.primary} />
      <Text style={[styles.quickTitle, { color: colors.text }]}>{title}</Text>
      <Text style={[styles.quickSubtitle, { color: colors.muted }]}>
        {subtitle}
      </Text>
    </Pressable>
  );
}

function LearnScreen({ colors }) {
  const courses = [
    ["Video Editing", "12 lessons", "68%", "videocam"],
    ["Graphic Design", "10 lessons", "35%", "color-palette"],
    ["Coding Basics", "16 lessons", "20%", "code-slash"],
    ["Business Basics", "8 lessons", "42%", "briefcase"],
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.page}
    >
      <Text style={[styles.eyebrow, { color: colors.muted }]}>LEARN</Text>
      <Text style={[styles.heading, { color: colors.text }]}>
        Skills that move you forward.
      </Text>

      <Text style={[styles.body, { color: colors.muted }]}>
        Learn a concept, practice it, then prove it with a real project.
      </Text>

      <View style={styles.searchFake}>
        <Ionicons name="search" size={19} color={colors.muted} />
        <Text style={{ color: colors.muted, marginLeft: 10 }}>
          Search skills and lessons
        </Text>
      </View>

      <SectionTitle title="Your courses" colors={colors} />

      {courses.map(([title, lessons, progress, icon]) => (
        <Pressable
          key={title}
          onPress={() =>
            Alert.alert(
              title,
              `${lessons} available.\nCurrent progress: ${progress}`
            )
          }
          style={[
            styles.learningCard,
            { backgroundColor: colors.surface, borderColor: colors.border },
          ]}
        >
          <View
            style={[styles.learningIcon, { backgroundColor: colors.primarySoft }]}
          >
            <Ionicons name={icon} size={23} color={colors.primary} />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.cardTitle, { color: colors.text }]}>
              {title}
            </Text>
            <Text style={[styles.courseMeta, { color: colors.muted }]}>
              {lessons}
            </Text>

            <View style={{ marginTop: 12 }}>
              <ProgressBar value={parseInt(progress)} colors={colors} />
            </View>
          </View>

          <Text style={[styles.percent, { color: colors.primary }]}>
            {progress}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

function SkillsScreen({ colors }) {
  const [started, setStarted] = useState({});

  const skills = [
    {
      title: "Video Editing",
      level: "Intermediate",
      progress: 68,
      icon: "videocam",
    },
    {
      title: "Graphic Design",
      level: "Beginner",
      progress: 35,
      icon: "color-palette",
    },
    {
      title: "Coding",
      level: "Beginner",
      progress: 20,
      icon: "code-slash",
    },
    {
      title: "Business",
      level: "Beginner",
      progress: 42,
      icon: "briefcase",
    },
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.page}
    >
      <Text style={[styles.eyebrow, { color: colors.muted }]}>SKILLS</Text>
      <Text style={[styles.heading, { color: colors.text }]}>
        Learn by doing.
      </Text>

      <Text style={[styles.body, { color: colors.muted }]}>
        Turn knowledge into practical skills through small projects.
      </Text>

      <SectionTitle title="My skills" colors={colors} />

      {skills.map((skill) => (
        <View
          key={skill.title}
          style={[
            styles.skillCard,
            { backgroundColor: colors.surface, borderColor: colors.border },
          ]}
        >
          <View style={[styles.skillIcon, { backgroundColor: colors.primarySoft }]}>
            <Ionicons name={skill.icon} size={23} color={colors.primary} />
          </View>

          <View style={{ flex: 1 }}>
            <View style={styles.skillTop}>
              <Text style={[styles.cardTitle, { color: colors.text }]}>
                {skill.title}
              </Text>

              <Text style={[styles.level, { color: colors.muted }]}>
                {skill.level}
              </Text>
            </View>

            <ProgressBar value={skill.progress} colors={colors} />

            <Text style={[styles.courseMeta, { color: colors.muted }]}>
              {skill.progress}% complete
            </Text>

            <Pressable
              style={[
                styles.smallButton,
                {
                  backgroundColor: started[skill.title]
                    ? colors.surface2
                    : colors.primary,
                },
              ]}
              onPress={() => {
                setStarted((prev) => ({
                  ...prev,
                  [skill.title]: !prev[skill.title],
                }));
              }}
            >
              <Text
                style={{
                  color: started[skill.title] ? colors.text : "#fff",
                  fontWeight: "700",
                }}
              >
                {started[skill.title] ? "In Progress" : "Start Practice"}
              </Text>
            </Pressable>
          </View>
        </View>
      ))}

      <View
        style={[
          styles.projectBanner,
          { backgroundColor: colors.primarySoft },
        ]}
      >
        <Ionicons name="flask" size={25} color={colors.primary} />
        <View style={{ flex: 1, marginLeft: 13 }}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            Project Lab
          </Text>
          <Text style={[styles.courseMeta, { color: colors.muted }]}>
            Build something real and add it to your Passport.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

function PassportScreen({ colors }) {
  const badges = [
    ["First Project", "rocket-outline"],
    ["12 Lessons", "book-outline"],
    ["Skill Builder", "hammer-outline"],
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.page}
    >
      <Text style={[styles.eyebrow, { color: colors.muted }]}>
        SKILL PASSPORT
      </Text>

      <Text style={[styles.heading, { color: colors.text }]}>
        Your proof of progress.
      </Text>

      <View
        style={[
          styles.passportCard,
          { backgroundColor: colors.surface, borderColor: colors.border },
        ]}
      >
        <View style={styles.passportHeader}>
          <View style={[styles.passportAvatar, { backgroundColor: colors.primary }]}>
            <Text style={styles.passportAvatarText}>A</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.passportName, { color: colors.text }]}>
              SAATH Learner
            </Text>
            <Text style={[styles.courseMeta, { color: colors.muted }]}>
              Skill Passport • Level 4
            </Text>
          </View>

          <Ionicons name="shield-checkmark" size={25} color={colors.green} />
        </View>

        <View style={styles.passportStats}>
          <PassportStat value="3" label="Skills" colors={colors} />
          <PassportStat value="4" label="Projects" colors={colors} />
          <PassportStat value="12" label="Lessons" colors={colors} />
        </View>
      </View>

      <SectionTitle title="Verified progress" colors={colors} />

      {["Video Editing", "Graphic Design", "Coding"].map((skill, i) => {
        const values = [68, 35, 20];

        return (
          <View
            key={skill}
            style={[
              styles.progressRow,
              { backgroundColor: colors.surface, borderColor: colors.border },
            ]}
          >
            <View style={{ flex: 1 }}>
              <Text style={[styles.cardTitle, { color: colors.text }]}>
                {skill}
              </Text>
              <ProgressBar value={values[i]} colors={colors} />
            </View>
            <Text style={[styles.percent, { color: colors.primary }]}>
              {values[i]}%
            </Text>
          </View>
        );
      })}

      <SectionTitle title="Badges" colors={colors} />

      <View style={styles.badgeGrid}>
        {badges.map(([title, icon]) => (
          <View
            key={title}
            style={[
              styles.badge,
              { backgroundColor: colors.surface, borderColor: colors.border },
            ]}
          >
            <Ionicons name={icon} size={25} color={colors.primary} />
            <Text style={[styles.badgeText, { color: colors.text }]}>
              {title}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function PassportStat({ value, label, colors }) {
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <Text style={[styles.statValue, { color: colors.text }]}>{value}</Text>
      <Text style={[styles.statLabel, { color: colors.muted }]}>{label}</Text>
    </View>
  );
}

function ProfileScreen({ colors, darkMode, setDarkMode }) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("SAATH Learner");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.page}
    >
      <Text style={[styles.eyebrow, { color: colors.muted }]}>PROFILE</Text>
      <Text style={[styles.heading, { color: colors.text }]}>
        Your SAATH account.
      </Text>

      <View
        style={[
          styles.profileCard,
          { backgroundColor: colors.surface, borderColor: colors.border },
        ]}
      >
        <View style={[styles.bigAvatar, { backgroundColor: colors.primarySoft }]}>
          <Text style={[styles.bigAvatarText, { color: colors.primary }]}>
            {name.charAt(0).toUpperCase()}
          </Text>
        </View>

        <Text style={[styles.profileName, { color: colors.text }]}>{name}</Text>
        <Text style={[styles.courseMeta, { color: colors.muted }]}>
          SAATH ID • SAATH-0001
        </Text>

        <Pressable
          style={[styles.outlineButton, { borderColor: colors.border }]}
          onPress={() => setModal(true)}
        >
          <Text style={{ color: colors.text, fontWeight: "700" }}>
            Edit Profile
          </Text>
        </Pressable>
      </View>

      <SectionTitle title="Account & preferences" colors={colors} />

      <SettingRow
        icon="moon-outline"
        title="Dark mode"
        subtitle="Change app appearance"
        colors={colors}
        right={
          <Pressable
            onPress={() => setDarkMode(!darkMode)}
            style={[
              styles.toggle,
              { backgroundColor: darkMode ? colors.primary : colors.surface2 },
            ]}
          >
            <View
              style={[
                styles.toggleKnob,
                { alignSelf: darkMode ? "flex-end" : "flex-start" },
              ]}
            />
          </Pressable>
        }
      />

      <SettingRow
        icon="shield-checkmark-outline"
        title="Safety & Privacy"
        subtitle="Control your account safety"
        colors={colors}
        onPress={() =>
          Alert.alert(
            "Safety & Privacy",
            "Your future SAATH account will use secure authentication and privacy controls."
          )
        }
      />

      <SettingRow
        icon="notifications-outline"
        title="Notifications"
        subtitle="Manage learning reminders"
        colors={colors}
        onPress={() => Alert.alert("Notifications", "Notification settings coming with the backend.")}
      />

      <SettingRow
        icon="help-circle-outline"
        title="Help & Support"
        subtitle="Get help with SAATH"
        colors={colors}
        onPress={() => Alert.alert("SAATH Support", "Support section will be connected in the next build.")}
      />

      <View style={{ height: 20 }} />

      <Text style={[styles.version, { color: colors.muted }]}>
        SAATH V3 • Learn • Build • Prove • Grow
      </Text>

      <Modal visible={modal} transparent animationType="fade">
        <View style={styles.modalBackdrop}>
          <View
            style={[
              styles.modalCard,
              { backgroundColor: colors.surface },
            ]}
          >
            <Text style={[styles.modalTitle, { color: colors.text }]}>
              Edit profile
            </Text>

            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Your name"
              placeholderTextColor={colors.muted}
              style={[
                styles.input,
                {
                  color: colors.text,
                  borderColor: colors.border,
                  backgroundColor: colors.surface2,
                },
              ]}
            />

            <View style={styles.modalButtons}>
              <Pressable
                onPress={() => setModal(false)}
                style={[styles.outlineButton, { borderColor: colors.border, flex: 1 }]}
              >
                <Text style={{ color: colors.text, fontWeight: "700" }}>
                  Cancel
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setModal(false)}
                style={[
                  styles.primaryButton,
                  { backgroundColor: colors.primary, flex: 1 },
                ]}
              >
                <Text style={styles.primaryButtonText}>Save</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

function SettingRow({ icon, title, subtitle, right, colors, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.settingRow,
        { backgroundColor: colors.surface, borderColor: colors.border },
      ]}
    >
      <View style={[styles.settingIcon, { backgroundColor: colors.primarySoft }]}>
        <Ionicons name={icon} size={20} color={colors.primary} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={[styles.cardTitle, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.courseMeta, { color: colors.muted }]}>
          {subtitle}
        </Text>
      </View>

      {right || <Ionicons name="chevron-forward" size={19} color={colors.muted} />}
    </Pressable>
  );
}

function AIScreen({ colors }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Hi! I'm SAATH AI. Ask me about studies, skills, coding, editing, business ideas or planning.",
    },
  ]);

  const send = () => {
    const text = input.trim();

    if (!text) return;

    setMessages((prev) => [
      ...prev,
      { from: "user", text },
      {
        from: "ai",
        text:
          "I received your question. The SAATH AI interface is ready, but real AI responses will be connected through a secure backend in the next step.",
      },
    ]);

    setInput("");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
      <StatusBar barStyle={colors === COLORS.dark ? "light-content" : "dark-content"} />

      <View
        style={[
          styles.aiHeader,
          { backgroundColor: colors.surface, borderBottomColor: colors.border },
        ]}
      >
        <View style={[styles.aiLogo, { backgroundColor: colors.primarySoft }]}>
          <Ionicons name="sparkles" size={20} color={colors.primary} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={[styles.aiTitle, { color: colors.text }]}>SAATH AI</Text>
          <Text style={[styles.courseMeta, { color: colors.muted }]}>
            Learn • Think • Build
          </Text>
        </View>

        <View style={[styles.onlineDot, { backgroundColor: colors.green }]} />
      </View>

      <ScrollView
        contentContainerStyle={styles.chatArea}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.message,
              message.from === "user"
                ? [
                    styles.userMessage,
                    { backgroundColor: colors.primary },
                  ]
                : [
                    styles.aiMessage,
                    {
                      backgroundColor: colors.surface,
                      borderColor: colors.border,
                    },
                  ],
            ]}
          >
            <Text
              style={{
                color: message.from === "user" ? "#fff" : colors.text,
                lineHeight: 21,
              }}
            >
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View
        style={[
          styles.aiInputArea,
          { backgroundColor: colors.surface, borderTopColor: colors.border },
        ]}
      >
        <View style={styles.aiModes}>
          {["Study", "Coding", "Creator", "Business"].map((mode) => (
            <Pressable
              key={mode}
              onPress={() =>
                setInput(`Help me with ${mode.toLowerCase()}`)
              }
              style={[
                styles.modeChip,
                {
                  backgroundColor: colors.surface2,
                  borderColor: colors.border,
                },
              ]}
            >
              <Text style={{ color: colors.text, fontSize: 12, fontWeight: "600" }}>
                {mode}
              </Text>
            </Pressable>
          ))}
        </View>

        <View style={styles.inputRow}>
          <TextInput
            value={input}
            onChangeText={setInput}
            onSubmitEditing={send}
            placeholder="Ask SAATH AI..."
            placeholderTextColor={colors.muted}
            style={[
              styles.aiInput,
              {
                backgroundColor: colors.surface2,
                color: colors.text,
                borderColor: colors.border,
              },
            ]}
          />

          <Pressable
            onPress={send}
            style={[styles.sendButton, { backgroundColor: colors.primary }]}
          >
            <Ionicons name="arrow-up" size={20} color="#fff" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

function AppTabs({ darkMode, setDarkMode }) {
  const colors = darkMode ? COLORS.dark : COLORS.light;

  return (
    <NavigationContainer
      theme={darkMode ? DarkTheme : DefaultTheme}
    >
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.muted,
          tabBarStyle: {
            height: 66,
            paddingTop: 7,
            paddingBottom: 8,
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        >
          {(props) => <HomeScreen {...props} colors={colors} />}
        </Tab.Screen>

        <Tab.Screen
          name="Learn"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="book-outline" color={color} size={size} />
            ),
          }}
        >
          {(props) => <LearnScreen {...props} colors={colors} />}
        </Tab.Screen>

        <Tab.Screen
          name="Skills"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="layers-outline" color={color} size={size} />
            ),
          }}
        >
          {(props) => <SkillsScreen {...props} colors={colors} />}
        </Tab.Screen>

        <Tab.Screen
          name="Passport"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ribbon-outline" color={color} size={size} />
            ),
          }}
        >
          {(props) => <PassportScreen {...props} colors={colors} />}
        </Tab.Screen>

        <Tab.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        >
          {(props) => (
            <ProfileScreen
              {...props}
              colors={colors}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="AI"
          options={{
            tabBarButton: () => null,
          }}
        >
          {(props) => <AIScreen {...props} colors={colors} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const colors = useMemo(
    () => (darkMode ? COLORS.dark : COLORS.light),
    [darkMode]
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <AppTabs darkMode={darkMode} setDarkMode={setDarkMode} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
    paddingTop: 18,
    paddingBottom: 35,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  eyebrow: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.4,
    marginBottom: 7,
  },

  heading: {
    fontSize: 29,
    fontWeight: "800",
    letterSpacing: -0.8,
  },

  avatar: {
    width: 45,
    height: 45,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontSize: 18,
    fontWeight: "800",
  },

  hero: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 21,
    marginBottom: 27,
  },

  heroBadge: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  heroBadgeText: {
    marginLeft: 7,
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 0.9,
  },

  heroTitle: {
    fontSize: 23,
    lineHeight: 29,
    fontWeight: "800",
    marginBottom: 9,
  },

  body: {
    fontSize: 14,
    lineHeight: 21,
  },

  primaryButton: {
    minHeight: 48,
    paddingHorizontal: 17,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 18,
  },

  primaryButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "800",
    marginRight: 8,
  },

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    marginBottom: 13,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
  },

  actionText: {
    fontSize: 13,
    fontWeight: "700",
  },

  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 25,
  },

  statBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 17,
    paddingVertical: 17,
    alignItems: "center",
  },

  statValue: {
    fontSize: 22,
    fontWeight: "800",
  },

  statLabel: {
    fontSize: 12,
    marginTop: 3,
  },

  courseRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 19,
    padding: 15,
    marginBottom: 24,
    gap: 12,
  },

  courseIcon: {
    width: 47,
    height: 47,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  courseTitle: {
    fontSize: 15,
    fontWeight: "800",
  },

  courseMeta: {
    fontSize: 12,
    marginTop: 4,
  },

  progressTrack: {
    height: 6,
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 9,
  },

  progressFill: {
    height: "100%",
    borderRadius: 10,
  },

  percent: {
    fontSize: 12,
    fontWeight: "800",
  },

  quickGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  quickCard: {
    width: "48%",
    borderWidth: 1,
    borderRadius: 18,
    padding: 16,
    minHeight: 112,
  },

  quickTitle: {
    fontSize: 14,
    fontWeight: "800",
    marginTop: 13,
  },

  quickSubtitle: {
    fontSize: 12,
    marginTop: 4,
  },

  searchFake: {
    height: 50,
    borderRadius: 15,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#151922",
  },

  learningCard: {
    borderWidth: 1,
    borderRadius: 19,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    marginBottom: 11,
  },

  learningIcon: {
    width: 47,
    height: 47,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "800",
  },

  skillCard: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 16,
    flexDirection: "row",
    gap: 13,
    marginBottom: 12,
  },

  skillIcon: {
    width: 47,
    height: 47,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  skillTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  level: {
    fontSize: 11,
    fontWeight: "600",
  },

  smallButton: {
    alignSelf: "flex-start",
    paddingHorizontal: 13,
    paddingVertical: 9,
    borderRadius: 11,
    marginTop: 12,
  },

  projectBanner: {
    borderRadius: 19,
    padding: 17,
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },

  passportCard: {
    borderWidth: 1,
    borderRadius: 23,
    padding: 19,
    marginTop: 17,
    marginBottom: 25,
  },

  passportHeader: {
    flexDirection: "row",
    alignItems: "center",
  },

  passportAvatar: {
    width: 52,
    height: 52,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 13,
  },

  passportAvatarText: {
    color: "#fff",
    fontSize: 21,
    fontWeight: "900",
  },

  passportName: {
    fontSize: 16,
    fontWeight: "800",
  },

  passportStats: {
    flexDirection: "row",
    marginTop: 24,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: "#292E38",
  },

  progressRow: {
    borderWidth: 1,
    borderRadius: 17,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 10,
  },

  badgeGrid: {
    flexDirection: "row",
    gap: 10,
  },

  badge: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 17,
    padding: 15,
    alignItems: "center",
    minHeight: 100,
    justifyContent: "center",
  },

  badgeText: {
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 9,
  },

  profileCard: {
    borderWidth: 1,
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    marginTop: 18,
    marginBottom: 25,
  },

  bigAvatar: {
    width: 78,
    height: 78,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
  },

  bigAvatarText: {
    fontSize: 32,
    fontWeight: "900",
  },

  profileName: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 13,
  },

  outlineButton: {
    minHeight: 45,
    borderWidth: 1,
    borderRadius: 13,
    paddingHorizontal: 17,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 17,
  },

  settingRow: {
    borderWidth: 1,
    borderRadius: 17,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
    gap: 12,
  },

  settingIcon: {
    width: 43,
    height: 43,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  toggle: {
    width: 48,
    height: 27,
    borderRadius: 20,
    padding: 3,
    justifyContent: "center",
  },

  toggleKnob: {
    width: 21,
    height: 21,
    borderRadius: 11,
    backgroundColor: "#fff",
  },

  version: {
    textAlign: "center",
    fontSize: 11,
    marginTop: 8,
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.65)",
    alignItems: "center",
    justifyContent: "center",
    padding: 22,
  },

  modalCard: {
    width: "100%",
    borderRadius: 23,
    padding: 21,
  },

  modalTitle: {
    fontSize: 21,
    fontWeight: "800",
    marginBottom: 18,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 13,
    paddingHorizontal: 14,
    fontSize: 15,
  },

  modalButtons: {
    flexDirection: "row",
    gap: 10,
  },

  aiHeader: {
    minHeight: 70,
    borderBottomWidth: 1,
    paddingHorizontal: 17,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  aiLogo: {
    width: 43,
    height: 43,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  aiTitle: {
    fontSize: 17,
    fontWeight: "900",
  },

  onlineDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
  },

  chatArea: {
    padding: 17,
    paddingBottom: 25,
  },

  message: {
    maxWidth: "87%",
    padding: 13,
    borderRadius: 17,
    marginBottom: 11,
  },

  aiMessage: {
    alignSelf: "flex-start",
    borderWidth: 1,
    borderBottomLeftRadius: 5,
  },

  userMessage: {
    alignSelf: "flex-end",
    borderBottomRightRadius: 5,
  },

  aiInputArea: {
    borderTopWidth: 1,
    padding: 10,
    paddingBottom: 12,
  },

  aiModes: {
    flexDirection: "row",
    gap: 7,
    marginBottom: 9,
  },

  modeChip: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 20,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  aiInput: {
    flex: 1,
    minHeight: 47,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 14,
    fontSize: 14,
  },

  sendButton: {
    width: 47,
    height: 47,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
