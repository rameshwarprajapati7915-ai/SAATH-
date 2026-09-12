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
  Image,
} from "react-native";

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

/* =========================================================
   SAATH DESIGN SYSTEM
   ========================================================= */

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
    blue: "#2563EB",
  },

  dark: {
    bg: "#080B14",
    surface: "#111521",
    surface2: "#191E2B",
    text: "#F7F8FC",
    muted: "#9CA3AF",
    border: "#272D3A",
    primary: "#8178FF",
    primarySoft: "#211F3E",
    green: "#4ADE80",
    orange: "#FBBF24",
    red: "#F87171",
    blue: "#60A5FA",
  },
};

/* =========================================================
   COMMON COMPONENTS
   ========================================================= */

function ProgressBar({ value, colors }) {
  return (
    <View
      style={[
        styles.progressTrack,
        { backgroundColor: colors.surface2 },
      ]}
    >
      <View
        style={[
          styles.progressFill,
          {
            width: `${Math.min(value, 100)}%`,
            backgroundColor: colors.primary,
          },
        ]}
      />
    </View>
  );
}

function SectionTitle({
  title,
  action,
  onPress,
  colors,
}) {
  return (
    <View style={styles.sectionHeader}>
      <Text
        style={[
          styles.sectionTitle,
          { color: colors.text },
        ]}
      >
        {title}
      </Text>

      {action && (
        <Pressable onPress={onPress}>
          <Text
            style={[
              styles.actionText,
              { color: colors.primary },
            ]}
          >
            {action}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

/* =========================================================
   HOME SCREEN
   ========================================================= */

function HomeScreen({ navigation, colors }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.page}
    >
      {/* HEADER */}

      <View style={styles.topRow}>
        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.eyebrow,
              { color: colors.muted },
            ]}
          >
            WELCOME BACK 👋
          </Text>

          <Text
            style={[
              styles.heading,
              { color: colors.text },
            ]}
          >
            Build your future.
          </Text>

          <Text
            style={[
              styles.subtitle,
              { color: colors.muted },
            ]}
          >
            Learn. Build. Prove. Grow.
          </Text>
        </View>

        <Pressable
          style={[
            styles.avatar,
            {
              backgroundColor:
                colors.primarySoft,
            },
          ]}
          onPress={() =>
            navigation.navigate("Profile")
          }
        >
          <Text
            style={[
              styles.avatarText,
              { color: colors.primary },
            ]}
          >
            A
          </Text>
        </Pressable>
      </View>

      {/* DAILY STREAK */}

      <View
        style={[
          styles.streakCard,
          {
            backgroundColor: colors.surface,
            borderColor: colors.border,
          },
        ]}
      >
        <View
          style={[
            styles.streakIcon,
            {
              backgroundColor:
                colors.primarySoft,
            },
          ]}
        >
          <Text style={{ fontSize: 23 }}>🔥</Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.cardTitle,
              { color: colors.text },
            ]}
          >
            7 day streak
          </Text>

          <Text
            style={[
              styles.courseMeta,
              { color: colors.muted },
            ]}
          >
            Keep learning every day!
          </Text>
        </View>

        <Text
          style={[
            styles.xpText,
            { color: colors.primary },
          ]}
        >
          +120 XP
        </Text>
      </View>

      {/* SUNDAY TEST */}

      <Pressable
        onPress={() =>
          Alert.alert(
            "Sunday All-India Test 🇮🇳",
            "Weekly test screen will open here. Your score will be used for the secure national leaderboard."
          )
        }
        style={[
          styles.testBanner,
          {
            backgroundColor:
              colors.primarySoft,
            borderColor:
              colors.primary,
          },
        ]}
      >
        <View style={styles.testBannerTop}>
          <View style={styles.testBadge}>
            <Text style={styles.testBadgeText}>
              🏆 EVERY SUNDAY
            </Text>
          </View>

          <Text
            style={[
              styles.liveText,
              { color: colors.green },
            ]}
          >
            ● WEEKLY
          </Text>
        </View>

        <Text
          style={[
            styles.testTitle,
            { color: colors.text },
          ]}
        >
          All-India Student Test
        </Text>

        <Text
          style={[
            styles.testDescription,
            { color: colors.muted },
          ]}
        >
          Compete with students across India and
          see your rank on the national leaderboard.
        </Text>

        <View style={styles.testBottom}>
          <Text
            style={[
              styles.testReward,
              { color: colors.primary },
            ]}
          >
            🥇 Top 10 • 🎁 Rewards • ⭐ XP
          </Text>

          <Ionicons
            name="arrow-forward-circle"
            size={30}
            color={colors.primary}
          />
        </View>
      </Pressable>

      {/* TODAY'S MISSION */}

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
          <Ionicons
            name="sparkles"
            size={15}
            color={colors.primary}
          />

          <Text
            style={[
              styles.heroBadgeText,
              { color: colors.primary },
            ]}
          >
            TODAY'S MISSION
          </Text>
        </View>

        <Text
          style={[
            styles.heroTitle,
            { color: colors.text },
          ]}
        >
          Create a 15-second video edit 🎬
        </Text>

        <Text
          style={[
            styles.body,
            { color: colors.muted },
          ]}
        >
          Complete one real-world challenge today
          and earn XP for your Skill Passport.
        </Text>

        <Pressable
          style={[
            styles.primaryButton,
            {
              backgroundColor:
                colors.primary,
            },
          ]}
          onPress={() =>
            navigation.navigate("Skills")
          }
        >
          <Text style={styles.primaryButtonText}>
            Start Mission
          </Text>

          <Ionicons
            name="arrow-forward"
            size={18}
            color="#fff"
          />
        </Pressable>
      </View>

      {/* PROGRESS */}

      <SectionTitle
        title="Your progress"
        colors={colors}
      />

      <View style={styles.statsRow}>
        <StatBox
          value="420"
          label="XP"
          colors={colors}
        />

        <StatBox
          value="7"
          label="Day Streak"
          colors={colors}
        />

        <StatBox
          value="12"
          label="Lessons"
          colors={colors}
        />
      </View>

      {/* CONTINUE LEARNING */}

      <SectionTitle
        title="Continue learning"
        action="View all"
        colors={colors}
        onPress={() =>
          navigation.navigate("Learn")
        }
      />

      <Pressable
        style={[
          styles.learningHero,
          {
            backgroundColor:
              colors.surface,
            borderColor:
              colors.border,
          },
        ]}
        onPress={() =>
          Alert.alert(
            "Video Editing",
            "Continue your next lesson."
          )
        }
      >
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
          }}
          style={styles.learningImage}
        />

        <View style={styles.learningOverlay}>
          <View>
            <Text
              style={styles.imageLabel}
            >
              CREATOR SKILL
            </Text>

            <Text
              style={styles.imageTitle}
            >
              Video Editing
            </Text>

            <Text
              style={styles.imageSubtitle}
            >
              68% complete
            </Text>
          </View>

          <View
            style={styles.playCircle}
          >
            <Ionicons
              name="play"
              size={20}
              color="#fff"
            />
          </View>
        </View>
      </Pressable>

      {/* QUICK ACCESS */}

      <SectionTitle
        title="Explore SAATH"
        colors={colors}
      />

      <View style={styles.quickGrid}>
        <QuickAction
          icon="sparkles-outline"
          title="SAATH AI"
          subtitle="Ask & learn"
          colors={colors}
          onPress={() =>
            navigation.navigate("AI")
          }
        />

        <QuickAction
          icon="trophy-outline"
          title="Leaderboard"
          subtitle="Top students"
          colors={colors}
          onPress={() =>
            navigation.navigate(
              "Leaderboard"
            )
          }
        />

        <QuickAction
          icon="flask-outline"
          title="Project Lab"
          subtitle="Build & prove"
          colors={colors}
          onPress={() =>
            Alert.alert(
              "Project Lab",
              "Choose a project and start building."
            )
          }
        />

        <QuickAction
          icon="ribbon-outline"
          title="Passport"
          subtitle="Your proof"
          colors={colors}
          onPress={() =>
            navigation.navigate("Passport")
          }
        />
      </View>

      {/* INDIA COMMUNITY */}

      <View
        style={[
          styles.communityCard,
          {
            backgroundColor:
              colors.surface,
            borderColor:
              colors.border,
          },
        ]}
      >
        <Text
          style={[
            styles.communityEmoji,
          ]}
        >
          🇮🇳
        </Text>

        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.cardTitle,
              { color: colors.text },
            ]}
          >
            Students across India
          </Text>

          <Text
            style={[
              styles.courseMeta,
              { color: colors.muted },
            ]}
          >
            Learn together. Compete fairly.
            Grow together.
          </Text>
        </View>

        <Text
          style={[
            styles.communityArrow,
            { color: colors.primary },
          ]}
        >
          →
        </Text>
      </View>
    </ScrollView>
  );
}

/* =========================================================
   SMALL COMPONENTS
   ========================================================= */

function StatBox({
  value,
  label,
  colors,
}) {
  return (
    <View
      style={[
        styles.statBox,
        {
          backgroundColor:
            colors.surface,
          borderColor:
            colors.border,
        },
      ]}
    >
      <Text
        style={[
          styles.statValue,
          { color: colors.text },
        ]}
      >
        {value}
      </Text>

      <Text
        style={[
          styles.statLabel,
          { color: colors.muted },
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

function QuickAction({
  icon,
  title,
  subtitle,
  colors,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.quickCard,
        {
          backgroundColor:
            colors.surface,
          borderColor:
            colors.border,
        },
      ]}
    >
      <View
        style={[
          styles.quickIcon,
          {
            backgroundColor:
              colors.primarySoft,
          },
        ]}
      >
        <Ionicons
          name={icon}
          size={22}
          color={colors.primary}
        />
      </View>

      <Text
        style={[
          styles.quickTitle,
          { color: colors.text },
        ]}
      >
        {title}
      </Text>

      <Text
        style={[
          styles.quickSubtitle,
          { color: colors.muted },
        ]}
      >
        {subtitle}
      </Text>
    </Pressable>
  );
}

/* =========================================================
   LEARN SCREEN
   ========================================================= */

function LearnScreen({ colors }) {
  const courses = [
    [
      "Video Editing",
      "12 lessons",
      68,
      "videocam",
      "🎬",
    ],
    [
      "Graphic Design",
      "10 lessons",
      35,
      "color-palette",
      "🎨",
    ],
    [
      "Coding Basics",
      "16 lessons",
      20,
      "code-slash",
      "💻",
    ],
    [
      "Business Basics",
      "8 lessons",
      42,
      "briefcase",
      "💼",
    ],
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.page}
    >
      <Text
        style={[
          styles.eyebrow,
          { color: colors.muted },
        ]}
      >
        LEARN
      </Text>

      <Text
        style={[
          styles.heading,
          { color: colors.text },
        ]}
      >
        Learn something useful.
      </Text>

      <Text
        style={[
          styles.body,
          { color: colors.muted },
        ]}
      >
        Concepts → Practice → Projects → Proof.
      </Text>

      {/* BOARD PREP */}

      <Pressable
        style={[
          styles.boardCard,
          {
            backgroundColor:
              colors.primarySoft,
            borderColor:
              colors.primary,
          },
        ]}
        onPress={() =>
          Alert.alert(
            "Board Preparation",
            "Class, board, subjects and chapter-wise preparation will be personalized here."
          )
        }
      >
        <View style={styles.boardEmoji}>
          📚
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.cardTitle,
              { color: colors.text },
            ]}
          >
            Board Preparation
          </Text>

          <Text
            style={[
              styles.courseMeta,
              { color: colors.muted },
            ]}
          >
            Chapters • Practice • Tests • Revision
          </Text>
        </View>

        <Ionicons
          name="chevron-forward"
          size={22}
          color={colors.primary}
        />
      </Pressable>

      <SectionTitle
        title="Skills for the future"
        colors={colors}
      />

      {courses.map(
        ([
          title,
          lessons,
          progress,
          icon,
          emoji,
        ]) => (
          <Pressable
            key={title}
            onPress={() =>
              Alert.alert(
                title,
                `${lessons}\nProgress: ${progress}%`
              )
            }
            style={[
              styles.learningCard,
              {
                backgroundColor:
                  colors.surface,
                borderColor:
                  colors.border,
              },
            ]}
          >
            <View
              style={[
                styles.learningIcon,
                {
                  backgroundColor:
                    colors.primarySoft,
                },
              ]}
            >
              <Text style={{ fontSize: 22 }}>
                {emoji}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={[
                  styles.cardTitle,
                  { color: colors.text },
                ]}
              >
                {title}
              </Text>

              <Text
                style={[
                  styles.courseMeta,
                  { color: colors.muted },
                ]}
              >
                {lessons}
              </Text>

              <ProgressBar
                value={progress}
                colors={colors}
              />
            </View>

            <Text
              style={[
                styles.percent,
                { color: colors.primary },
              ]}
            >
              {progress}%
            </Text>
          </Pressable>
        )
      )}

      {/* LEARNING TIP */}

      <View
        style={[
          styles.tipCard,
          {
            backgroundColor:
              colors.surface,
            borderColor:
              colors.border,
          },
        ]}
      >
        <Text style={{ fontSize: 27 }}>
          💡
        </Text>

        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.cardTitle,
              { color: colors.text },
            ]}
          >
            SAATH learning rule
          </Text>

          <Text
            style={[
              styles.courseMeta,
              { color: colors.muted },
            ]}
          >
            Don't just watch. Practice what you
            learn and build something.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

/* =========================================================
   END OF PART 1
   =========================================================/* =========================================================
   SKILLS SCREEN
   ========================================================= */

function SkillsScreen({ colors }) {
  const skills = [
    {
      title: "Video Editing",
      subtitle: "Create reels, shorts & stories",
      emoji: "🎬",
      progress: 68,
    },
    {
      title: "Graphic Design",
      subtitle: "Posters, thumbnails & designs",
      emoji: "🎨",
      progress: 35,
    },
    {
      title: "Coding",
      subtitle: "Learn to build real apps",
      emoji: "💻",
      progress: 20,
    },
    {
      title: "AI Tools",
      subtitle: "Use AI to learn & create",
      emoji: "🤖",
      progress: 45,
    },
    {
      title: "Problem Solving",
      subtitle: "Think better. Solve better.",
      emoji: "🧠",
      progress: 25,
    },
    {
      title: "App Development",
      subtitle: "Turn ideas into apps",
      emoji: "📱",
      progress: 10,
    },
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.page}
    >
      <Text
        style={[
          styles.eyebrow,
          { color: colors.muted },
        ]}
      >
        SKILL LAB
      </Text>

      <Text
        style={[
          styles.heading,
          { color: colors.text },
        ]}
      >
        Build real skills.
      </Text>

      <Text
        style={[
          styles.body,
          { color: colors.muted },
        ]}
      >
        Pick a skill, complete missions and
        build projects you can show.
      </Text>

      <View
        style={[
          styles.skillHero,
          {
            backgroundColor:
              colors.surface,
            borderColor:
              colors.border,
          },
        ]}
      >
        <View style={styles.skillHeroEmoji}>
          🚀
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.cardTitle,
              { color: colors.text },
            ]}
          >
            Your Skill Passport
          </Text>

          <Text
            style={[
              styles.courseMeta,
              { color: colors.muted },
            ]}
          >
            3 skills unlocked
          </Text>
        </View>

        <Ionicons
          name="chevron-forward"
          size={22}
          color={colors.primary}
        />
      </View>

      <SectionTitle
        title="Explore skills"
        colors={colors}
      />

      {skills.map((skill) => (
        <Pressable
          key={skill.title}
          onPress={() =>
            Alert.alert(
              skill.title,
              "Skill learning path will open here."
            )
          }
          style={[
            styles.skillCard,
            {
              backgroundColor:
                colors.surface,
              borderColor:
                colors.border,
            },
          ]}
        >
          <View
            style={[
              styles.skillEmoji,
              {
                backgroundColor:
                  colors.primarySoft,
              },
            ]}
          >
            <Text style={{ fontSize: 27 }}>
              {skill.emoji}
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={[
                styles.cardTitle,
                { color: colors.text },
              ]}
            >
              {skill.title}
            </Text>

            <Text
              style={[
                styles.courseMeta,
                { color: colors.muted },
              ]}
            >
              {skill.subtitle}
            </Text>

            <View style={{ marginTop: 9 }}>
              <ProgressBar
                value={skill.progress}
                colors={colors}
              />
            </View>
          </View>

          <Text
            style={[
              styles.percent,
              { color: colors.primary },
            ]}
          >
            {skill.progress}%
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

/* =========================================================
   LEADERBOARD DATA
   ========================================================= */

/*
  DEMO DATA ONLY.

  Production version:
  - score must come from secure backend
  - student cannot directly write rank
  - weekly leaderboard must be calculated server-side
  - public profile should use nickname/avatar by default
*/

const DEMO_LEADERBOARD = [
  {
    rank: 1,
    name: "Aarav",
    city: "Delhi",
    xp: 9850,
    avatar: "🧑‍💻",
  },
  {
    rank: 2,
    name: "Ananya",
    city: "Mumbai",
    xp: 9420,
    avatar: "👩‍🎓",
  },
  {
    rank: 3,
    name: "Vihaan",
    city: "Bengaluru",
    xp: 9180,
    avatar: "🧑‍🚀",
  },
  {
    rank: 4,
    name: "Diya",
    city: "Pune",
    xp: 8870,
    avatar: "👩‍💻",
  },
  {
    rank: 5,
    name: "Kabir",
    city: "Jaipur",
    xp: 8510,
    avatar: "🧑‍🎨",
  },
  {
    rank: 6,
    name: "Meera",
    city: "Indore",
    xp: 8230,
    avatar: "👩‍🔬",
  },
  {
    rank: 7,
    name: "Arjun",
    city: "Hyderabad",
    xp: 8010,
    avatar: "🧑‍🚀",
  },
  {
    rank: 8,
    name: "Ishita",
    city: "Chennai",
    xp: 7840,
    avatar: "👩‍💻",
  },
  {
    rank: 9,
    name: "Rohan",
    city: "Kolkata",
    xp: 7650,
    avatar: "🧑‍🎓",
  },
  {
    rank: 10,
    name: "Sara",
    city: "Ahmedabad",
    xp: 7420,
    avatar: "👩‍🎨",
  },
];

/* =========================================================
   WEEK HELPERS
   ========================================================= */

function getCurrentWeekId() {
  const date = new Date();

  date.setHours(0, 0, 0, 0);

  date.setDate(
    date.getDate() - date.getDay()
  );

  return date.toISOString().slice(0, 10);
}

function getDaysUntilSunday() {
  const now = new Date();

  const nextSunday = new Date(now);

  nextSunday.setDate(
    now.getDate() +
      (now.getDay() === 0
        ? 7
        : 7 - now.getDay())
  );

  nextSunday.setHours(0, 0, 0, 0);

  return Math.max(
    0,
    Math.ceil(
      (nextSunday.getTime() -
        now.getTime()) /
        86400000
    )
  );
}

/* =========================================================
   LEADERBOARD SCREEN
   ========================================================= */

function LeaderboardScreen({ colors }) {
  const weekId = useMemo(
    () => getCurrentWeekId(),
    []
  );

  const daysLeft = useMemo(
    () => getDaysUntilSunday(),
    []
  );

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.page}
    >
      <Text
        style={[
          styles.eyebrow,
          { color: colors.muted },
        ]}
      >
        INDIA LEADERBOARD 🇮🇳
      </Text>

      <Text
        style={[
          styles.heading,
          { color: colors.text },
        ]}
      >
        Top 10 Students
      </Text>

      <Text
        style={[
          styles.body,
          { color: colors.muted },
        ]}
      >
        This week's highest performers.
      </Text>

      {/* WEEK STATUS */}

      <View
        style={[
          styles.weekCard,
          {
            backgroundColor:
              colors.primarySoft,
            borderColor:
              colors.primary,
          },
        ]}
      >
        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.cardTitle,
              { color: colors.text },
            ]}
          >
            🏆 Weekly Challenge
          </Text>

          <Text
            style={[
              styles.courseMeta,
              { color: colors.muted },
            ]}
          >
            New leaderboard every Sunday
          </Text>
        </View>

        <View style={styles.daysCircle}>
          <Text
            style={[
              styles.daysNumber,
              { color: colors.primary },
            ]}
          >
            {daysLeft}
          </Text>

          <Text
            style={[
              styles.daysLabel,
              { color: colors.muted },
            ]}
          >
            days
          </Text>
        </View>
      </View>

      {/* TOP 3 */}

      <View style={styles.podiumRow}>
        {DEMO_LEADERBOARD.slice(0, 3).map(
          (student, index) => (
            <View
              key={student.rank}
              style={[
                styles.podiumCard,
                {
                  backgroundColor:
                    colors.surface,
                  borderColor:
                    colors.border,
                  marginTop:
                    index === 0
                      ? 0
                      : index === 1
                      ? 22
                      : 34,
                },
              ]}
            >
              <Text
                style={styles.podiumMedal}
              >
                {index === 0
                  ? "🥇"
                  : index === 1
                  ? "🥈"
                  : "🥉"}
              </Text>

              <View
                style={[
                  styles.largeAvatar,
                  {
                    backgroundColor:
                      colors.primarySoft,
                  },
                ]}
              >
                <Text style={{ fontSize: 27 }}>
                  {student.avatar}
                </Text>
              </View>

              <Text
                style={[
                  styles.podiumName,
                  { color: colors.text },
                ]}
              >
                {student.name}
              </Text>

              <Text
                style={[
                  styles.podiumXP,
                  { color: colors.primary },
                ]}
              >
                {student.xp} XP
              </Text>
            </View>
          )
        )}
      </View>

      {/* FULL TOP 10 */}

      <SectionTitle
        title="Top 10"
        colors={colors}
      />

      {DEMO_LEADERBOARD.map(
        (student) => (
          <View
            key={student.rank}
            style={[
              styles.rankRow,
              {
                backgroundColor:
                  colors.surface,
                borderColor:
                  colors.border,
              },
            ]}
          >
            <View style={styles.rankNumber}>
              <Text
                style={[
                  styles.rankText,
                  { color: colors.muted },
                ]}
              >
                #{student.rank}
              </Text>
            </View>

            <View
              style={[
                styles.smallAvatar,
                {
                  backgroundColor:
                    colors.primarySoft,
                },
              ]}
            >
              <Text style={{ fontSize: 20 }}>
                {student.avatar}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text
                style={[
                  styles.rankName,
                  { color: colors.text },
                ]}
              >
                {student.name}
              </Text>

              <Text
                style={[
                  styles.rankCity,
                  { color: colors.muted },
                ]}
              >
                {student.city}
              </Text>
            </View>

            <Text
              style={[
                styles.rankXP,
                { color: colors.primary },
              ]}
            >
              {student.xp} XP
            </Text>
          </View>
        )
      )}

      {/* REWARD */}

      <View
        style={[
          styles.rewardCard,
          {
            backgroundColor:
              colors.surface,
            borderColor:
              colors.border,
          },
        ]}
      >
        <Text style={{ fontSize: 32 }}>
          🎁
        </Text>

        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.cardTitle,
              { color: colors.text },
            ]}
          >
            Top 10 Reward
          </Text>

          <Text
            style={[
              styles.courseMeta,
              { color: colors.muted },
            ]}
          >
            Finish in the Top 10 three times in
            one year to become eligible for a
            special SAATH reward.
          </Text>
        </View>
      </View>

      {/* SECURITY NOTE */}

      <View
        style={[
          styles.securityCard,
          {
            backgroundColor:
              colors.surface2,
          },
        ]}
      >
        <Ionicons
          name="shield-checkmark"
          size={23}
          color={colors.green}
        />

        <Text
          style={[
            styles.securityText,
            { color: colors.muted },
          ]}
        >
          Scores and ranks will be verified by
          SAATH servers. Students won't be able
          to edit leaderboard scores directly.
        </Text>
      </View>

      <Text
        style={[
          styles.weekIdText,
          { color: colors.muted },
        ]}
      >
        Current week: {weekId}
      </Text>
    </ScrollView>
  );
}

/* =========================================================
   SUNDAY TEST SCREEN
   ========================================================= */

function TestScreen({ colors }) {
  const [selected, setSelected] =
    useState(null);

  const [submitted, setSubmitted] =
    useState(false);

  const options = [
    "Photosynthesis",
    "Respiration",
    "Transpiration",
    "Germination",
  ];

  function submitAnswer() {
    if (selected === null) {
      Alert.alert(
        "Choose an answer",
        "Please select one option first."
      );
      return;
    }

    setSubmitted(true);
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.page}
    >
      <Text
        style={[
          styles.eyebrow,
          { color: colors.muted },
        ]}
      >
        SUNDAY TEST 🏆
      </Text>

      <Text
        style={[
          styles.heading,
          { color: colors.text },
        ]}
      >
        All-India Test
      </Text>

      <Text
        style={[
          styles.body,
          { color: colors.muted },
        ]}
      >
        Test your knowledge and compete fairly
        with students across India.
      </Text>

      {/* TEST INFO */}

      <View
        style={[
          styles.testInfoCard,
          {
            backgroundColor:
              colors.primarySoft,
            borderColor:
              colors.primary,
          },
        ]}
      >
        <View style={styles.infoItem}>
          <Text style={styles.infoEmoji}>
            📝
          </Text>
          <Text
            style={[
              styles.infoText,
              { color: colors.text },
            ]}
          >
            20 Questions
          </Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoEmoji}>
            ⏱️
          </Text>
          <Text
            style={[
              styles.infoText,
              { color: colors.text },
            ]}
          >
            Timed
          </Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoEmoji}>
            ⭐
          </Text>
          <Text
            style={[
              styles.infoText,
              { color: colors.text },
            ]}
          >
            XP Reward
          </Text>
        </View>
      </View>

      {/* QUESTION */}

      <View
        style={[
          styles.questionCard,
          {
            backgroundColor:
              colors.surface,
            borderColor:
              colors.border,
          },
        ]}
      >
        <Text
          style={[
            styles.questionNumber,
            { color: colors.primary },
          ]}
        >
          QUESTION 1 / 20
        </Text>

        <Text
          style={[
            styles.question,
            { color: colors.text },
          ]}
        >
          Which process do green plants use
          to make their food?
        </Text>

        {options.map(
          (option, index) => {
            const isSelected =
              selected === index;

            return (
              <Pressable
                key={option}
                onPress={() =>
                  !submitted &&
                  setSelected(index)
                }
                style={[
                  styles.option,
                  {
                    backgroundColor:
                      isSelected
                        ? colors.primarySoft
                        : colors.surface,
                    borderColor:
                      isSelected
                        ? colors.primary
                        : colors.border,
                  },
                ]}
              >
                <View
                  style={[
                    styles.optionCircle,
                    {
                      borderColor:
                        isSelected
                          ? colors.primary
                          : colors.border,
                      backgroundColor:
                        isSelected
                          ? colors.primary
                          : "transparent",
                    },
                  ]}
                >
                  {isSelected && (
                    <Ionicons
                      name="checkmark"
                      size={15}
                      color="#fff"
                    />
                  )}
                </View>

                <Text
                  style={[
                    styles.optionText,
                    { color: colors.text },
                  ]}
                >
                  {option}
                </Text>
              </Pressable>
            );
          }
        )}

        {submitted && (
          <View
            style={[
              styles.answerFeedback,
              {
                backgroundColor:
                  colors.primarySoft,
              },
            ]}
          >
            <Text
              style={[
                styles.cardTitle,
                { color: colors.primary },
              ]}
            >
              Great! 🌟
            </Text>

            <Text
              style={[
                styles.courseMeta,
                { color: colors.muted },
              ]}
            >
              Your answer has been recorded for
              this practice test.
            </Text>
          </View>
        )}

        <Pressable
          onPress={submitAnswer}
          style={[
            styles.primaryButton,
            {
              backgroundColor:
                colors.primary,
            },
          ]}
        >
          <Text
            style={styles.primaryButtonText}
          >
            {submitted
              ? "Answer Submitted"
              : "Submit Answer"}
          </Text>
        </Pressable>
      </View>

      <View
        style={[
          styles.tipCard,
          {
            backgroundColor:
              colors.surface,
            borderColor:
              colors.border,
          },
        ]}
      >
        <Text style={{ fontSize: 25 }}>
          💡
        </Text>

        <Text
          style={[
            styles.courseMeta,
            {
              color: colors.muted,
              flex: 1,
            },
          ]}
        >
          Don't worry about rank while learning.
          Focus on understanding the concept.
        </Text>
      </View>
    </ScrollView>
  );
}

/* =========================================================
   PASSPORT SCREEN
   ========================================================= */

function PassportScreen({ colors }) {
  const badges = [
    ["🔥", "7 Day Streak"],
    ["🎬", "Creator"],
    ["💻", "Coder"],
    ["🧠", "Problem Solver"],
    ["🏆", "Test Player"],
    ["🚀", "Builder"],
  ];

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.page}
    >
      <Text
        style={[
          styles.eyebrow,
          { color: colors.muted },
        ]}
      >
        SKILL PASSPORT
      </Text>

      <Text
        style={[
          styles.heading,
          { color: colors.text },
        ]}
      >
        Your proof of growth.
      </Text>

      <View
        style={[
          styles.passportCard,
          {
            backgroundColor:
              colors.surface,
            borderColor:
              colors.border,
          },
        ]}
      >
        <View
          style={[
            styles.passportAvatar,
            {
              backgroundColor:
                colors.primarySoft,
            },
          ]}
        >
          <Text style={{ fontSize: 38 }}>
            🧑‍🎓
          </Text>
        </View>

        <Text
          style={[
            styles.passportName,
            { color: colors.text },
          ]}
        >
          Aaryan
        </Text>

        <Text
          style={[
            styles.courseMeta,
            { color: colors.muted },
          ]}
        >
          SAATH Student
        </Text>

        <View style={styles.passportStats}>
          <View>
            <Text
              style={[
                styles.passportStatNumber,
                { color: colors.primary },
              ]}
            >
              420
            </Text>
            <Text
              style={[
                styles.courseMeta,
                { color: colors.muted },
              ]}
            >
              XP
            </Text>
          </View>

          <View>
            <Text
              style={[
                styles.passportStatNumber,
                { color: colors.primary },
              ]}
            >
              12
            </Text>
            <Text
              style={[
                styles.courseMeta,
                { color: colors.muted },
              ]}
            >
              Lessons
            </Text>
          </View>

          <View>
            <Text
              style={[
                styles.passportStatNumber,
                { color: colors.primary },
              ]}
            >
              4
            </Text>
            <Text
              style={[
                styles.courseMeta,
                { color: colors.muted },
              ]}
            >
              Badges
            </Text>
          </View>
        </View>
      </View>

      <SectionTitle
        title="Achievements"
        colors={colors}
      />

      <View style={styles.badgeGrid}>
        {badges.map(
          ([emoji, title]) => (
            <View
              key={title}
              style={[
                styles.badgeCard,
                {
                  backgroundColor:
                    colors.surface,
                  borderColor:
                    colors.border,
                },
              ]}
            >
              <Text
                style={styles.badgeEmoji}
              >
                {emoji}
              </Text>

              <Text
                style={[
                  styles.badgeTitle,
                  { color: colors.text },
                ]}
              >
                {title}
              </Text>
            </View>
          )
        )}
      </View>

      <View
        style={[
          styles.proofCard,
          {
            backgroundColor:
              colors.primarySoft,
            borderColor:
              colors.primary,
          },
        ]}
      >
        <Text style={{ fontSize: 28 }}>
          📜
        </Text>

        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.cardTitle,
              { color: colors.text },
            ]}
          >
            Build your proof
          </Text>

          <Text
            style={[
              styles.courseMeta,
              { color: colors.muted },
            ]}
          >
            Projects, skills, missions and
            achievements will appear here.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

/* =========================================================
   PROFILE SCREEN
   ========================================================= */

function ProfileScreen({
  colors,
  darkMode,
  setDarkMode,
}) {
  const [name, setName] =
    useState("Aaryan");

  const [modalVisible, setModalVisible] =
    useState(false);

  const [draftName, setDraftName] =
    useState(name);

  function saveName() {
    const cleaned =
      draftName.trim();

    if (!cleaned) {
      Alert.alert(
        "Name required",
        "Please enter your name."
      );
      return;
    }

    setName(cleaned);
    setModalVisible(false);
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.page}
    >
      <Text
        style={[
          styles.eyebrow,
          { color: colors.muted },
        ]}
      >
        PROFILE
      </Text>

      <Text
        style={[
          styles.heading,
          { color: colors.text },
        ]}
      >
        Your SAATH profile
      </Text>

      {/* PROFILE CARD */}

      <View
        style={[
          styles.profileCard,
          {
            backgroundColor:
              colors.surface,
            borderColor:
              colors.border,
          },
        ]}
      >
        <View
          style={[
            styles.profileAvatar,
            {
              backgroundColor:
                colors.primarySoft,
            },
          ]}
        >
          <Text style={{ fontSize: 35 }}>
            🧑‍🎓
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.profileName,
              { color: colors.text },
            ]}
          >
            {name}
          </Text>

          <Text
            style={[
              styles.courseMeta,
              { color: colors.muted },
            ]}
          >
            Student • Class 10
          </Text>
        </View>

        <Pressable
          onPress={() => {
            setDraftName(name);
            setModalVisible(true);
          }}
        >
          <Ionicons
            name="create-outline"
            size={23}
            color={colors.primary}
          />
        </Pressable>
      </View>

      {/* PERSONALIZATION */}

      <SectionTitle
        title="Learning profile"
        colors={colors}
      />

      <ProfileOption
        icon="school-outline"
        title="Class & Board"
        subtitle="Class 10 • Board to be selected"
        colors={colors}
        onPress={() =>
          Alert.alert(
            "Class & Board",
            "Class and board selection will personalize your learning."
          )
        }
      />

      <ProfileOption
        icon="book-outline"
        title="Subjects"
        subtitle="Choose the subjects you study"
        colors={colors}
        onPress={() =>
          Alert.alert(
            "Subjects",
            "Subject selection will be available here."
          )
        }
      />

      <ProfileOption
        icon="flag-outline"
        title="Goals"
        subtitle="Tell SAATH what you want to achieve"
        colors={colors}
        onPress={() =>
          Alert.alert(
            "Goals",
            "Your goals will personalize recommendations."
          )
        }
      />

      <ProfileOption
        icon="time-outline"
        title="Daily study time"
        subtitle="Set a realistic daily learning target"
        colors={colors}
        onPress={() =>
          Alert.alert(
            "Daily Study Time",
            "You can choose your preferred study time."
          )
        }
      />

      {/* SETTINGS */}

      <SectionTitle
        title="Settings"
        colors={colors}
      />

      <View
        style={[
          styles.settingRow,
          {
            backgroundColor:
              colors.surface,
            borderColor:
              colors.border,
          },
        ]}
      >
        <View
          style={[
            styles.settingIcon,
            {
              backgroundColor:
                colors.primarySoft,
            },
          ]}
        >
          <Ionicons
            name={
              darkMode
                ? "moon"
                : "sunny-outline"
            }
            size={20}
            color={colors.primary}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.cardTitle,
              { color: colors.text },
            ]}
          >
            Dark mode
          </Text>

          <Text
            style={[
              styles.courseMeta,
              { color: colors.muted },
            ]}
          >
            {darkMode
              ? "Enabled"
              : "Disabled"}
          </Text>
        </View>

        <Pressable
          onPress={() =>
            setDarkMode(!darkMode)
          }
          style={[
            styles.toggle,
            {
              backgroundColor:
                darkMode
                  ? colors.primary
                  : colors.surface2,
            },
          ]}
        >
          <View
            style={[
              styles.toggleCircle,
              {
                transform: [
                  {
                    translateX:
                      darkMode
                        ? 18
                        : 0,
                  },
                ],
              },
            ]}
          />
        </Pressable>
      </View>

      <ProfileOption
        icon="shield-checkmark-outline"
        title="Safety & Privacy"
        subtitle="Learn how SAATH protects your data"
        colors={colors}
        onPress={() =>
          Alert.alert(
            "Safety & Privacy",
            "SAATH should collect only the information needed for learning and protect student data with proper security rules."
          )
        }
      />

      <ProfileOption
        icon="notifications-outline"
        title="Notifications"
        subtitle="Learning reminders and updates"
        colors={colors}
        onPress={() =>
          Alert.alert(
            "Notifications",
            "Notification preferences will be available here."
          )
        }
      />

      {/* EDIT MODAL */}

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() =>
          setModalVisible(false)
        }
      >
        <View style={styles.modalBackdrop}>
          <View
            style={[
              styles.modalCard,
              {
                backgroundColor:
                  colors.surface,
              },
            ]}
          >
            <Text
              style={[
                styles.modalTitle,
                { color: colors.text },
              ]}
            >
              Edit profile
            </Text>

            <Text
              style={[
                styles.courseMeta,
                { color: colors.muted },
              ]}
            >
              Your display name
            </Text>

            <TextInput
              value={draftName}
              onChangeText={setDraftName}
              placeholder="Enter name"
              placeholderTextColor={
                colors.muted
              }
              style={[
                styles.input,
                {
                  color: colors.text,
                  borderColor:
                    colors.border,
                  backgroundColor:
                    colors.surface2,
                },
              ]}
            />

            <View
              style={styles.modalButtons}
            >
              <Pressable
                onPress={() =>
                  setModalVisible(false)
                }
                style={[
                  styles.secondaryButton,
                  {
                    borderColor:
                      colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.secondaryText,
                    { color: colors.text },
                  ]}
                >
                  Cancel
                </Text>
              </Pressable>

              <Pressable
                onPress={saveName}
                style={[
                  styles.primaryButton,
                  {
                    flex: 1,
                    marginTop: 0,
                    backgroundColor:
                      colors.primary,
                  },
                ]}
              >
                <Text
                  style={
                    styles.primaryButtonText
                  }
                >
                  Save
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

/* =========================================================
   PROFILE OPTION COMPONENT
   ========================================================= */

function ProfileOption({
  icon,
  title,
  subtitle,
  colors,
  onPress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.profileOption,
        {
          backgroundColor:
            colors.surface,
          borderColor:
            colors.border,
        },
      ]}
    >
      <View
        style={[
          styles.settingIcon,
          {
            backgroundColor:
              colors.primarySoft,
          },
        ]}
      >
        <Ionicons
          name={icon}
          size={20}
          color={colors.primary}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text
          style={[
            styles.cardTitle,
            { color: colors.text },
          ]}
        >
          {title}
        </Text>

        <Text
          style={[
            styles.courseMeta,
            { color: colors.muted },
          ]}
        >
          {subtitle}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color={colors.muted}
      />
    </Pressable>
  );
}

/* =========================================================
   END OF PART 2
   ========================================================= *//* =========================================================
   SAATH AI SCREEN
   ========================================================= */

function AIScreen({ colors }) {
  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([
      {
        id: 1,
        role: "ai",
        text:
          "Hi! I'm SAATH AI 👋\n\nAsk me about your studies, concepts, projects, coding or any skill you're learning.",
      },
    ]);

  function sendMessage() {
    const cleaned = message.trim();

    if (!cleaned) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      text: cleaned,
    };

    setMessages((old) => [
      ...old,
      userMessage,
    ]);

    setMessage("");

    /*
      IMPORTANT:
      This is only the UI layer.

      Production SAATH AI should call a secure
      backend API. Never put a private AI API key
      directly inside the Android app.
    */

    setTimeout(() => {
      setMessages((old) => [
        ...old,
        {
          id: Date.now() + 1,
          role: "ai",
          text:
            "Good question! 🤔\n\nSAATH AI's secure backend will answer this with explanations, examples and practice questions.",
        },
      ]);
    }, 500);
  }

  return (
    <SafeAreaView
      style={[
        styles.aiContainer,
        { backgroundColor: colors.bg },
      ]}
    >
      {/* HEADER */}

      <View
        style={[
          styles.aiHeader,
          {
            backgroundColor:
              colors.surface,
            borderBottomColor:
              colors.border,
          },
        ]}
      >
        <View
          style={[
            styles.aiLogo,
            {
              backgroundColor:
                colors.primarySoft,
            },
          ]}
        >
          <Text style={{ fontSize: 22 }}>
            ✨
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={[
              styles.aiTitle,
              { color: colors.text },
            ]}
          >
            SAATH AI
          </Text>

          <Text
            style={[
              styles.aiStatus,
              { color: colors.green },
            ]}
          >
            ● Learning assistant
          </Text>
        </View>

        <Ionicons
          name="shield-checkmark"
          size={21}
          color={colors.green}
        />
      </View>

      {/* CHAT */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          styles.chatContent
        }
      >
        <View
          style={[
            styles.aiWelcome,
            {
              backgroundColor:
                colors.primarySoft,
            },
          ]}
        >
          <Text style={{ fontSize: 25 }}>
            🧠
          </Text>

          <View style={{ flex: 1 }}>
            <Text
              style={[
                styles.cardTitle,
                { color: colors.text },
              ]}
            >
              Learn, don't just copy.
            </Text>

            <Text
              style={[
                styles.courseMeta,
                { color: colors.muted },
              ]}
            >
              Ask SAATH AI to explain concepts,
              give examples or create practice
              questions.
            </Text>
          </View>
        </View>

        {messages.map((item) => {
          const isUser =
            item.role === "user";

          return (
            <View
              key={item.id}
              style={[
                styles.messageRow,
                isUser &&
                  styles.messageRowUser,
              ]}
            >
              {!isUser && (
                <View
                  style={[
                    styles.messageAvatar,
                    {
                      backgroundColor:
                        colors.primarySoft,
                    },
                  ]}
                >
                  <Text>✨</Text>
                </View>
              )}

              <View
                style={[
                  styles.messageBubble,
                  {
                    backgroundColor: isUser
                      ? colors.primary
                      : colors.surface,
                    borderColor:
                      colors.border,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    {
                      color: isUser
                        ? "#FFFFFF"
                        : colors.text,
                    },
                  ]}
                >
                  {item.text}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>

      {/* SUGGESTIONS */}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          styles.suggestionRow
        }
      >
        {[
          "Explain a concept",
          "Give me a quiz",
          "Help with coding",
          "Make a study plan",
        ].map((suggestion) => (
          <Pressable
            key={suggestion}
            onPress={() =>
              setMessage(suggestion)
            }
            style={[
              styles.suggestionChip,
              {
                backgroundColor:
                  colors.surface,
                borderColor:
                  colors.border,
              },
            ]}
          >
            <Text
              style={[
                styles.suggestionText,
                { color: colors.text },
              ]}
            >
              {suggestion}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* INPUT */}

      <View
        style={[
          styles.chatInputRow,
          {
            backgroundColor:
              colors.surface,
            borderTopColor:
              colors.border,
          },
        ]}
      >
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Ask SAATH anything..."
          placeholderTextColor={
            colors.muted
          }
          multiline
          style={[
            styles.chatInput,
            {
              color: colors.text,
              backgroundColor:
                colors.surface2,
            },
          ]}
        />

        <Pressable
          onPress={sendMessage}
          style={[
            styles.sendButton,
            {
              backgroundColor:
                colors.primary,
            },
          ]}
        >
          <Ionicons
            name="arrow-up"
            size={21}
            color="#FFFFFF"
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

/* =========================================================
   APP NAVIGATION
   ========================================================= */

export default function App() {
  const [darkMode, setDarkMode] =
    useState(false);

  const colors = darkMode
    ? COLORS.dark
    : COLORS.light;

  const navigationTheme = darkMode
    ? {
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          background: colors.bg,
          card: colors.surface,
          text: colors.text,
          border: colors.border,
          primary: colors.primary,
        },
      }
    : {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: colors.bg,
          card: colors.surface,
          text: colors.text,
          border: colors.border,
          primary: colors.primary,
        },
      };

  return (
    <NavigationContainer
      theme={navigationTheme}
    >
      <StatusBar
        barStyle={
          darkMode
            ? "light-content"
            : "dark-content"
        }
      />

      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarActiveTintColor:
            colors.primary,

          tabBarInactiveTintColor:
            colors.muted,

          tabBarStyle: {
            backgroundColor:
              colors.surface,
            borderTopColor:
              colors.border,
            height: 68,
            paddingBottom: 8,
            paddingTop: 6,
          },

          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600",
          },

          tabBarIcon: ({
            color,
            focused,
            size,
          }) => {
            let iconName = "home-outline";

            if (route.name === "Home") {
              iconName = focused
                ? "home"
                : "home-outline";
            }

            if (route.name === "Learn") {
              iconName = focused
                ? "book"
                : "book-outline";
            }

            if (route.name === "Skills") {
              iconName = focused
                ? "rocket"
                : "rocket-outline";
            }

            if (
              route.name === "Leaderboard"
            ) {
              iconName = focused
                ? "trophy"
                : "trophy-outline";
            }

            if (route.name === "Passport") {
              iconName = focused
                ? "ribbon"
                : "ribbon-outline";
            }

            if (route.name === "Profile") {
              iconName = focused
                ? "person"
                : "person-outline";
            }

            if (route.name === "AI") {
              iconName = focused
                ? "sparkles"
                : "sparkles-outline";
            }

            return (
              <Ionicons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Home"
          options={{
            title: "Home",
          }}
        >
          {(props) => (
            <HomeScreen
              {...props}
              colors={colors}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Learn"
          options={{
            title: "Learn",
          }}
        >
          {(props) => (
            <LearnScreen
              {...props}
              colors={colors}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Skills"
          options={{
            title: "Skills",
          }}
        >
          {(props) => (
            <SkillsScreen
              {...props}
              colors={colors}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Leaderboard"
          options={{
            title: "Top 10",
          }}
        >
          {(props) => (
            <LeaderboardScreen
              {...props}
              colors={colors}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Passport"
          options={{
            title: "Passport",
          }}
        >
          {(props) => (
            <PassportScreen
              {...props}
              colors={colors}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Profile"
          options={{
            title: "Profile",
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
            title: "SAATH AI",
            tabBarButton: () => null,
          }}
        >
          {(props) => (
            <AIScreen
              {...props}
              colors={colors}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Test"
          options={{
            title: "Sunday Test",
            tabBarButton: () => null,
          }}
        >
          {(props) => (
            <TestScreen
              {...props}
              colors={colors}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/* =========================================================
   STYLES
   ========================================================= */

const styles = StyleSheet.create({
  page: {
    padding: 18,
    paddingBottom: 35,
  },

  topRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  eyebrow: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1.2,
    marginBottom: 5,
  },

  heading: {
    fontSize: 29,
    fontWeight: "800",
    letterSpacing: -0.7,
  },

  subtitle: {
    fontSize: 14,
    marginTop: 5,
  },

  body: {
    fontSize: 14,
    lineHeight: 21,
    marginTop: 7,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  avatarText: {
    fontSize: 19,
    fontWeight: "800",
  },

  /* STREAK */

  streakCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderRadius: 18,
    marginBottom: 14,
  },

  streakIcon: {
    width: 47,
    height: 47,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: "750",
  },

  courseMeta: {
    fontSize: 12,
    lineHeight: 18,
    marginTop: 3,
  },

  xpText: {
    fontSize: 12,
    fontWeight: "800",
  },

  /* TEST BANNER */

  testBanner: {
    padding: 18,
    borderRadius: 22,
    borderWidth: 1,
    marginBottom: 15,
  },

  testBannerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  testBadge: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 8,
  },

  testBadgeText: {
    fontSize: 9,
    fontWeight: "900",
    color: "#635BFF",
  },

  liveText: {
    fontSize: 10,
    fontWeight: "800",
  },

  testTitle: {
    fontSize: 21,
    fontWeight: "800",
    marginTop: 14,
  },

  testDescription: {
    fontSize: 13,
    lineHeight: 19,
    marginTop: 6,
  },

  testBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 14,
  },

  testReward: {
    fontSize: 12,
    fontWeight: "700",
  },

  /* HERO */

  hero: {
    padding: 19,
    borderRadius: 22,
    borderWidth: 1,
    marginBottom: 23,
  },

  heroBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  heroBadgeText: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 0.8,
  },

  heroTitle: {
    fontSize: 21,
    fontWeight: "800",
    marginTop: 12,
    lineHeight: 27,
  },

  primaryButton: {
    minHeight: 48,
    paddingHorizontal: 18,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "800",
  },

  /* SECTION */

  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 7,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
  },

  actionText: {
    fontSize: 12,
    fontWeight: "700",
  },

  /* STATS */

  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 22,
  },

  statBox: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 17,
    alignItems: "center",
  },

  statValue: {
    fontSize: 22,
    fontWeight: "850",
  },

  statLabel: {
    fontSize: 10,
    marginTop: 4,
  },

  /* LEARNING IMAGE */

  learningHero: {
    height: 190,
    borderRadius: 22,
    overflow: "hidden",
    borderWidth: 1,
    marginBottom: 22,
  },

  learningImage: {
    width: "100%",
    height: "100%",
  },

  learningOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    paddingTop: 45,
    backgroundColor:
      "rgba(0,0,0,0.52)",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },

  imageLabel: {
    color: "#FFFFFF",
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1,
  },

  imageTitle: {
    color: "#FFFFFF",
    fontSize: 21,
    fontWeight: "800",
    marginTop: 3,
  },

  imageSubtitle: {
    color: "#FFFFFF",
    fontSize: 11,
    marginTop: 2,
  },

  playCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor:
      "rgba(99,91,255,0.95)",
    alignItems: "center",
    justifyContent: "center",
  },

  /* QUICK ACCESS */

  quickGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },

  quickCard: {
    width: "48%",
    minHeight: 120,
    borderRadius: 18,
    borderWidth: 1,
    padding: 13,
  },

  quickIcon: {
    width: 40,
    height: 40,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
  },

  quickTitle: {
    fontSize: 14,
    fontWeight: "800",
  },

  quickSubtitle: {
    fontSize: 11,
    marginTop: 3,
  },

  /* COMMUNITY */

  communityCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 18,
    borderWidth: 1,
    marginTop: 2,
  },

  communityEmoji: {
    fontSize: 29,
    marginRight: 12,
  },

  communityArrow: {
    fontSize: 22,
    fontWeight: "800",
  },

  /* LEARN */

  boardCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 18,
    marginBottom: 22,
  },

  boardEmoji: {
    fontSize: 30,
    marginRight: 12,
  },

  learningCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 10,
    gap: 10,
  },

  learningIcon: {
    width: 51,
    height: 51,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  progressTrack: {
    height: 6,
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 8,
  },

  progressFill: {
    height: "100%",
    borderRadius: 4,
  },

  percent: {
    fontSize: 11,
    fontWeight: "800",
  },

  tipCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 15,
    borderRadius: 18,
    borderWidth: 1,
    marginTop: 8,
  },

  /* SKILLS */

  skillHero: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 18,
    marginBottom: 22,
  },

  skillHeroEmoji: {
    fontSize: 31,
    marginRight: 13,
  },

  skillCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 10,
    gap: 11,
  },

  skillEmoji: {
    width: 54,
    height: 54,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  /* LEADERBOARD */

  weekCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 18,
    marginBottom: 20,
  },

  daysCircle: {
    width: 55,
    height: 55,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  daysNumber: {
    fontSize: 18,
    fontWeight: "900",
  },

  daysLabel: {
    fontSize: 9,
  },

  podiumRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 7,
    marginBottom: 22,
  },

  podiumCard: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 4,
    borderRadius: 17,
    borderWidth: 1,
  },

  podiumMedal: {
    fontSize: 20,
  },

  largeAvatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  podiumName: {
    fontSize: 12,
    fontWeight: "800",
    marginTop: 7,
  },

  podiumXP: {
    fontSize: 10,
    fontWeight: "800",
    marginTop: 3,
  },

  rankRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 11,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 8,
  },

  rankNumber: {
    width: 37,
  },

  rankText: {
    fontSize: 11,
    fontWeight: "800",
  },

  smallAvatar: {
    width: 43,
    height: 43,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  rankName: {
    fontSize: 13,
    fontWeight: "800",
  },

  rankCity: {
    fontSize: 10,
    marginTop: 2,
  },

  rankXP: {
    fontSize: 11,
    fontWeight: "900",
  },

  rewardCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 13,
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    marginTop: 12,
  },

  securityCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    padding: 13,
    borderRadius: 15,
    marginTop: 10,
  },

  securityText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 15,
  },

  weekIdText: {
    textAlign: "center",
    fontSize: 9,
    marginTop: 15,
  },

  /* TEST */

  testInfoCard: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    borderRadius: 18,
    borderWidth: 1,
    marginTop: 18,
    marginBottom: 15,
  },

  infoItem: {
    alignItems: "center",
    gap: 5,
  },

  infoEmoji: {
    fontSize: 21,
  },

  infoText: {
    fontSize: 10,
    fontWeight: "700",
  },

  questionCard: {
    padding: 17,
    borderRadius: 20,
    borderWidth: 1,
  },

  questionNumber: {
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 0.8,
  },

  question: {
    fontSize: 19,
    lineHeight: 26,
    fontWeight: "800",
    marginTop: 9,
    marginBottom: 15,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    borderRadius: 14,
    borderWidth: 1,
    marginBottom: 9,
  },

  optionCircle: {
    width: 25,
    height: 25,
    borderRadius: 13,
    borderWidth: 1.5,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  optionText: {
    flex: 1,
    fontSize: 13,
    fontWeight: "600",
  },

  answerFeedback: {
    padding: 13,
    borderRadius: 13,
    marginTop: 5,
  },

  /* PASSPORT */

  passportCard: {
    alignItems: "center",
    padding: 22,
    borderRadius: 23,
    borderWidth: 1,
    marginTop: 18,
  },

  passportAvatar: {
    width: 78,
    height: 78,
    borderRadius: 39,
    alignItems: "center",
    justifyContent: "center",
  },

  passportName: {
    fontSize: 20,
    fontWeight: "850",
    marginTop: 10,
  },

  passportStats: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },

  passportStatsItem: {
    alignItems: "center",
  },

  passportStatNumber: {
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
  },

  badgeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  badgeCard: {
    width: "31.5%",
    minHeight: 105,
    borderRadius: 17,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
  },

  badgeEmoji: {
    fontSize: 28,
  },

  badgeTitle: {
    fontSize: 10,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 6,
  },

  proofCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    borderRadius: 18,
    borderWidth: 1,
    marginTop: 20,
  },

  /* PROFILE */

  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    marginTop: 18,
    marginBottom: 22,
  },

  profileAvatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  profileName: {
    fontSize: 18,
    fontWeight: "850",
  },

  profileOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    borderRadius: 17,
    borderWidth: 1,
    marginBottom: 9,
    gap: 11,
  },

  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    borderRadius: 17,
    borderWidth: 1,
    marginBottom: 9,
    gap: 11,
  },

  settingIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  toggle: {
    width: 42,
    height: 24,
    borderRadius: 14,
    padding: 3,
    justifyContent: "center",
  },

  toggleCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#FFFFFF",
  },

  /* MODAL */

  modalBackdrop: {
    flex: 1,
    backgroundColor:
      "rgba(0,0,0,0.55)",
    alignItems: "center",
    justifyContent: "center",
    padding: 22,
  },

  modalCard: {
    width: "100%",
    borderRadius: 22,
    padding: 20,
  },

  modalTitle: {
    fontSize: 21,
    fontWeight: "850",
    marginBottom: 5,
  },

  input: {
    height: 50,
    borderRadius: 13,
    borderWidth: 1,
    paddingHorizontal: 14,
    marginTop: 14,
    fontSize: 14,
  },

  modalButtons: {
    flexDirection: "row",
    gap: 9,
    marginTop: 15,
  },

  secondaryButton: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryText: {
    fontSize: 13,
    fontWeight: "800",
  },

  /* AI */

  aiContainer: {
    flex: 1,
  },

  aiHeader: {
    minHeight: 65,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    gap: 11,
  },

  aiLogo: {
    width: 43,
    height: 43,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },

  aiTitle: {
    fontSize: 16,
    fontWeight: "850",
  },

  aiStatus: {
    fontSize: 10,
    marginTop: 2,
  },

  chatContent: {
    padding: 15,
    paddingBottom: 10,
  },

  aiWelcome: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
    padding: 14,
    borderRadius: 17,
    marginBottom: 15,
  },

  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 12,
    gap: 7,
  },

  messageRowUser: {
    justifyContent: "flex-end",
  },

  messageAvatar: {
    width: 31,
    height: 31,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  messageBubble: {
    maxWidth: "82%",
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 17,
    borderWidth: 1,
  },

  messageText: {
    fontSize: 13,
    lineHeight: 19,
  },

  suggestionRow: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    gap: 7,
  },

  suggestionChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },

  suggestionText: {
    fontSize: 10,
    fontWeight: "700",
  },

  chatInputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    paddingHorizontal: 12,
    paddingTop: 9,
    paddingBottom: 9,
    borderTopWidth: 1,
  },

  chatInput: {
    flex: 1,
    minHeight: 44,
    maxHeight: 100,
    borderRadius: 15,
    paddingHorizontal: 13,
    paddingTop: 12,
    paddingBottom: 10,
    fontSize: 13,
  },

  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

/* =========================================================
   SAATH APP.JS COMPLETE
   ========================================================= */ */
