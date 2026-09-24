import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const profilePhoto = require("../../assets/images/gayathri.png");
// const eventPassImage = require("../../assets/event-pass.png");
const eventPassImage = require("../../assets/images/event-pass.jpg");
const eventPassFullImage = require("../../assets/images/event-pass-full.jpg");
const chats = [
  {
    id: "1",
    name: "EMEA - AI Cohort 2",
    message: "Session invite",
    time: "20:30",
  },
  {
    id: "2",
    name: "Ikano Complete Engineering",
    message: "You: Done",
    time: "20:17",
  },
  {
    id: "3",
    name: "EMEA AI Doubt Buster",
    message: "Client call discussion...",
    time: "17:00",
  },
  {
    id: "4",
    name: "Nallolla Shiva Prasad",
    message: "You: hey",
    time: "12:20",
  },
  {
    id: "5",
    name: "Neelam Faiqua",
    message: "You: i didnt attend today",
    time: "12:18",
  },
  {
    id: "6",
    name: "Srinidhi Reddy",
    message: "You: i didnt attend today",
    time: "12:18",
  },
  {
    id: "7",
    name: "Varshini",
    message: "You: i didnt attend today",
    time: "12:18",
  },
  {
    id: "8",
    name: "Nithin",
    message: "You: i didnt attend today",
    time: "12:18",
  },
  {
    id: "9",
    name: "Jayanth",
    message: "You: i didnt attend today",
    time: "12:18",
  },
  {
    id: "10",
    name: "Abhinay",
    message: "You: i didnt attend today",
    time: "12:18",
  },
  {
    id: "11",
    name: "Sandeep",
    message: "You: i didnt attend today",
    time: "12:18",
  },
  {
    id: "12",
    name: "Vikas",
    message: "You: i didnt attend today",
    time: "12:18",
  },
  {
    id: "13",
    name: "Jhanvi",
    message: "You: i didnt attend today",
    time: "12:18",
  },
  {
    id: "14",
    name: "Srinath",
    message: "You: i didnt attend today",
    time: "12:18",
  },
  {
    id: "15",
    name: "Nikitha",
    message: "You: i didnt attend today",
    time: "12:18",
  },
  {
    id: "16",
    name: "Harsha",
    message: "You: i didnt attend today",
    time: "12:18",
  },
];

const quickActions = [
  { icon: "content-copy", title: "Catchup" },
  { icon: "arrow-down-right", title: "Recent" },
  { icon: "email-off-outline", title: "Unread" },
  { icon: "at", title: "Mentions" },
  { icon: "star-four-points-outline", title: "Discover" },
];
const activities = [
  {
    id: "1",
    title: "HCLTech posted an announcement",
    message: "Level Up with NVIDIA: 12 FREE Courses Now Open...",
    source: "All Company",
    time: "Monday",
  },
  {
    id: "2",
    title: "Missed call",
    message: "Unknown number",
    source: "",
    time: "Monday",
  },
  {
    id: "3",
    title: "HCLTech posted an announcement",
    message: "This communication is intended for all employees...",
    source: "All Company",
    time: "Friday",
  },
  {
    id: "4",
    title: "HCLTech posted an announcement",
    message: "This communication is intended for all employees...",
    source: "All Company",
    time: "Friday",
  },

  {
    id: "5",
    title: "HCLTech posted an announcement",
    message: "This communication is intended for all employees...",
    source: "All Company",
    time: "Friday",
  },

  {
    id: "6",
    title: "HCLTech posted an announcement",
    message: "This communication is intended for all employees...",
    source: "All Company",
    time: "Friday",
  },

  {
    id: "7",
    title: "HCLTech posted an announcement",
    message: "This communication is intended for all employees...",
    source: "All Company",
    time: "Friday",
  },

  {
    id: "8",
    title: "HCLTech posted an announcement",
    message: "This communication is intended for all employees...",
    source: "All Company",
    time: "Friday",
  },
  {
    id: "9",
    title: "HCLTech posted an announcement",
    message: "This communication is intended for all employees...",
    source: "All Company",
    time: "Friday",
  },

  {
    id: "10",
    title: "HCLTech posted an announcement",
    message: "This communication is intended for all employees...",
    source: "All Company",
    time: "Friday",
  },
  {
    id: "11",
    title: "HCLTech posted an announcement",
    message: "This communication is intended for all employees...",
    source: "All Company",
    time: "Friday",
  },

  {
    id: "12",
    title: "HCLTech posted an announcement",
    message: "This communication is intended for all employees...",
    source: "All Company",
    time: "Friday",
  },

  {
    id: "13",
    title: "HCLTech posted an announcement",
    message: "This communication is intended for all employees...",
    source: "All Company",
    time: "Friday",
  },
];
const calendarEvents: Record<number, any[]> = {
  1: [
    {
      time: "09:00",
      duration: "1 hr",
      title: "Daily Team Stand-up",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "10:30",
      duration: "1 hr",
      title: "Java Full Stack Training",
      subtitle: "Training Session",
    },
    {
      time: "12:00",
      duration: "30 min",
      title: "Project Discussion",
      subtitle: "Ikano Complete Engineering",
    },
    {
      time: "14:00",
      duration: "1 hr",
      title: "Spring Boot Session",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "15:30",
      duration: "30 min",
      title: "Team Catch-up",
      subtitle: "Internal Meeting",
    },
    {
      time: "17:00",
      duration: "1 hr",
      title: "AI Cohort Discussion",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "18:30",
      duration: "30 min",
      title: "Learning & Development",
      subtitle: "Personal Development",
    },
  ],

  2: [
    {
      time: "09:00",
      duration: "1 hr",
      title: "Daily Team Stand-up",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "10:00",
      duration: "2 hr",
      title: "React Native Training",
      subtitle: "Training Session",
    },
    {
      time: "12:30",
      duration: "30 min",
      title: "Lunch & Team Connect",
      subtitle: "Team Activity",
    },
    {
      time: "14:00",
      duration: "1 hr",
      title: "Code Review",
      subtitle: "Ikano Project",
    },
    {
      time: "15:30",
      duration: "1 hr",
      title: "Java Practice Session",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "17:00",
      duration: "1 hr",
      title: "EMEA AI Cohort Session",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "18:30",
      duration: "30 min",
      title: "Project Planning",
      subtitle: "Internal Meeting",
    },
  ],

  3: [
    {
      time: "09:00",
      duration: "1 hr",
      title: "Daily Team Stand-up",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "10:30",
      duration: "1 hr",
      title: "Spring Boot Workshop",
      subtitle: "Training Session",
    },
    {
      time: "12:00",
      duration: "30 min",
      title: "Team Connect",
      subtitle: "Internal Meeting",
    },
    {
      time: "14:00",
      duration: "1 hr",
      title: "Database & SQL Practice",
      subtitle: "Training Session",
    },
    {
      time: "15:30",
      duration: "30 min",
      title: "Mentor Connect",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "17:00",
      duration: "1 hr",
      title: "AI Doubt Buster",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "18:30",
      duration: "30 min",
      title: "Learning Hour",
      subtitle: "Self Learning",
    },
  ],

  4: [
    {
      time: "09:00",
      duration: "1 hr",
      title: "Daily Team Stand-up",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "10:00",
      duration: "1 hr",
      title: "Core Java Training",
      subtitle: "Training Session",
    },
    {
      time: "11:30",
      duration: "30 min",
      title: "Project Sync",
      subtitle: "Ikano Project",
    },
    {
      time: "13:30",
      duration: "1 hr",
      title: "React Training",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "15:00",
      duration: "1 hr",
      title: "Coding Practice",
      subtitle: "Development Session",
    },
    {
      time: "17:00",
      duration: "1 hr",
      title: "EMEA AI Session",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "18:30",
      duration: "30 min",
      title: "Team Catch-up",
      subtitle: "Internal Meeting",
    },
  ],

  5: [
    {
      time: "09:00",
      duration: "1 hr",
      title: "Weekly Team Meeting",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "10:30",
      duration: "1 hr",
      title: "Java Full Stack Session",
      subtitle: "Training Session",
    },
    {
      time: "12:00",
      duration: "30 min",
      title: "Project Updates",
      subtitle: "Ikano Project",
    },
    {
      time: "14:00",
      duration: "1 hr",
      title: "Spring Boot Practice",
      subtitle: "Development Session",
    },
    {
      time: "15:30",
      duration: "30 min",
      title: "Mentor Meeting",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "17:00",
      duration: "1 hr",
      title: "AI Doubt Buster",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "18:00",
      duration: "30 min",
      title: "Weekly Review",
      subtitle: "Internal Meeting",
    },
  ],

  6: [
    {
      time: "09:30",
      duration: "1 hr",
      title: "Weekend Planning",
      subtitle: "Personal Calendar",
    },
    {
      time: "11:00",
      duration: "1 hr",
      title: "Learning Session",
      subtitle: "Self Learning",
    },
    {
      time: "12:30",
      duration: "30 min",
      title: "Project Review",
      subtitle: "Ikano Project",
    },
    {
      time: "14:00",
      duration: "1 hr",
      title: "React Native Practice",
      subtitle: "Development Session",
    },
    {
      time: "16:00",
      duration: "1 hr",
      title: "Java Coding Practice",
      subtitle: "Self Learning",
    },
    {
      time: "17:30",
      duration: "30 min",
      title: "Team Catch-up",
      subtitle: "Microsoft Teams Meeting",
    },
    {
      time: "19:00",
      duration: "1 hr",
      title: "Personal Development",
      subtitle: "Learning",
    },
  ],

  7: [
    {
      time: "09:00",
      duration: "1 hr",
      title: "Weekly Planning",
      subtitle: "Personal Calendar",
    },
    {
      time: "10:30",
      duration: "1 hr",
      title: "Java Practice",
      subtitle: "Self Learning",
    },
    {
      time: "12:00",
      duration: "30 min",
      title: "Project Preparation",
      subtitle: "Ikano Project",
    },
    {
      time: "14:00",
      duration: "1 hr",
      title: "React Practice",
      subtitle: "Development Session",
    },
    {
      time: "15:30",
      duration: "30 min",
      title: "AI Learning",
      subtitle: "Self Learning",
    },
    {
      time: "17:00",
      duration: "1 hr",
      title: "Weekly Review",
      subtitle: "Internal Meeting",
    },
    {
      time: "18:30",
      duration: "30 min",
      title: "Next Week Planning",
      subtitle: "Personal Calendar",
    },
  ],
};
const defaultEvents = [
  {
    time: "09:00",
    duration: "1 hr",
    title: "Daily Team Stand-up",
    subtitle: "Microsoft Teams Meeting",
  },
  {
    time: "10:30",
    duration: "1 hr",
    title: "Java Full Stack Training",
    subtitle: "Training Session",
  },
  {
    time: "12:00",
    duration: "30 min",
    title: "Project Discussion",
    subtitle: "Ikano Project",
  },
  {
    time: "14:00",
    duration: "1 hr",
    title: "React & Spring Boot Session",
    subtitle: "Microsoft Teams Meeting",
  },
  {
    time: "15:30",
    duration: "30 min",
    title: "Team Catch-up",
    subtitle: "Internal Meeting",
  },
  {
    time: "17:00",
    duration: "1 hr",
    title: "AI Cohort / Doubt Buster",
    subtitle: "Microsoft Teams Meeting",
  },
  {
    time: "18:30",
    duration: "30 min",
    title: "Learning & Development",
    subtitle: "Self Learning",
  },
];
export default function Home() {
  const [selectedDate, setSelectedDate] = useState(26);
  const [selectedTab, setSelectedTab] = useState("Chat");
  const [showEventPass, setShowEventPass] = useState(false);
  return (
    <View style={styles.container}>
      <Modal
        visible={showEventPass}
        animationType="slide"
        onRequestClose={() => setShowEventPass(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowEventPass(false)}
          >
            <Icon name="close" size={30} color="#fff" />
          </TouchableOpacity>

          <Image
            source={eventPassFullImage}
            style={styles.fullEventPass}
            resizeMode="contain"
          />
        </View>
      </Modal>
      {/* Header */}

      <View style={styles.header}>
        <Image source={profilePhoto} style={styles.profile} />

        <Text style={styles.headerTitle}>{selectedTab}</Text>

        <View style={styles.headerIcons}>
          <Icon name="microsoft" size={28} color="#8B5CF6" />

          <Icon
            name="magnify"
            size={28}
            color="#fff"
            style={{ marginLeft: 20 }}
          />

          <Icon
            name="dots-vertical"
            size={28}
            color="#fff"
            style={{ marginLeft: 20 }}
          />
        </View>
      </View>

      {/* Action Buttons */}

      {selectedTab === "Chat" && (
        <>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 10,
            }}
          >
            {quickActions.map((item) => (
              <View key={item.title} style={styles.card}>
                <Icon name={item.icon} size={24} color="#fff" />
                <Text style={styles.cardText}>{item.title}</Text>
              </View>
            ))}
          </ScrollView>

          <Text style={styles.sectionTitle}>⌄ Favourites</Text>

          <View style={styles.favoriteRow}>
            <Image source={profilePhoto} style={styles.profile} />

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>Musham Gayathri Devi (You)</Text>

              <Text style={styles.message}>You: IMG file shared</Text>
            </View>

            <Text style={styles.time}>12:55</Text>
          </View>

          <Text style={styles.sectionTitle}>⌄ Chats</Text>

          <FlatList
            data={chats}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.chatRow}>
                <View style={styles.chatIcon}>
                  <Icon name="view-grid" size={22} color="#000" />
                </View>

                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{item.name}</Text>

                  <Text style={styles.message}>{item.message}</Text>
                </View>

                <Text style={styles.time}>{item.time}</Text>
              </View>
            )}
          />
        </>
      )}
      {selectedTab === "Calendar" && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.calendarContainer}
        >
          {/* Calendar Header */}
          <View style={styles.calendarHeader}>
            <View style={styles.calendarHeaderLeft}>
              <Image source={profilePhoto} style={styles.calendarProfile} />

              <Text style={styles.monthTitle}>September</Text>
            </View>

            <Icon name="magnify" size={30} color="#fff" />
          </View>

          {/* Agenda / Day */}
          <View style={styles.calendarModeRow}>
            <TouchableOpacity style={styles.agendaButton}>
              <Text style={styles.selectedModeText}>Agenda</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dayButton}>
              <Text style={styles.modeText}>Day</Text>
            </TouchableOpacity>
          </View>

          {/* Week Days */}
          <View style={styles.weekDays}>
            {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
              <Text key={index} style={styles.weekDayText}>
                {day}
              </Text>
            ))}
          </View>

          {/* FULL SEPTEMBER 2026 */}
          <View style={styles.monthCalendar}>
            {[
              null,
              null,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16,
              17,
              18,
              19,
              20,
              21,
              22,
              23,
              24,
              25,
              26,
              27,
              28,
              29,
              30,
            ].map((date, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.7}
                disabled={date === null}
                onPress={() => date !== null && setSelectedDate(date)}
                style={[
                  styles.calendarDateCell,
                  date === selectedDate && styles.selectedCalendarDate,
                ]}
              >
                {date !== null && (
                  <Text
                    style={[
                      styles.calendarDateText,
                      date === selectedDate && styles.selectedCalendarDateText,
                    ]}
                  >
                    {date}
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>

          {/* Divider */}
          <View style={styles.calendarDivider} />

          {/* SELECTED DATE */}
          <View style={styles.daySection}>
            {/* Selected date heading */}
            <View style={styles.dayHeading}>
              <Text style={styles.dayDate}>{selectedDate} Sept</Text>

              <Text style={styles.dayName}>
                {selectedDate === 23
                  ? "Today"
                  : selectedDate === 24
                    ? "Tomorrow"
                    : selectedDate === 26
                      ? "Saturday"
                      : ""}
              </Text>
            </View>

            {/* EVENTS FOR SELECTED DATE */}
            {(calendarEvents[selectedDate] || defaultEvents).map(
              (event, index) => (
                <View key={index} style={styles.calendarEvent}>
                  {/* TIME */}
                  <View style={styles.eventTimeColumn}>
                    <Text style={styles.eventTime}>{event.time}</Text>

                    <Text style={styles.eventDuration}>{event.duration}</Text>
                  </View>

                  {/* EVENT LINE */}
                  <View
                    style={[
                      styles.eventLine,
                      index % 2 === 1 && styles.stripedLine,
                    ]}
                  />

                  {/* EVENT DETAILS */}
                  <View style={styles.eventInfo}>
                    <View style={styles.eventTitleWithIcon}>
                      <Text style={styles.calendarEventTitle}>
                        {event.title}
                      </Text>

                      <Icon
                        name="link-variant"
                        size={18}
                        color="#fff"
                        style={{ marginLeft: 8 }}
                      />
                    </View>

                    <Text style={styles.calendarEventSubtitle}>
                      {event.subtitle}
                    </Text>
                  </View>
                </View>
              ),
            )}
          </View>
          {/* Today Button */}
          <TouchableOpacity
            style={styles.todayButton}
            onPress={() => setSelectedDate(23)}
          >
            <Icon name="arrow-down" size={18} color="#A970FF" />

            <Text style={styles.todayText}>Today</Text>
          </TouchableOpacity>

          {/* Add Event */}
          <TouchableOpacity style={styles.addEventButton}>
            <Text style={styles.plusText}>+</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {selectedTab === "MyHCLTech" && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Tabs */}

          <View
            style={{
              flexDirection: "row",
              marginBottom: 15,
            }}
          >
            <View
              style={{
                backgroundColor: "#7C6CF6",
                paddingHorizontal: 18,
                paddingVertical: 10,
                borderRadius: 20,
                marginRight: 10,
              }}
            >
              <Text style={{ color: "#fff" }}>Dashboard</Text>
            </View>

            <View
              style={{
                backgroundColor: "#232323",
                paddingHorizontal: 18,
                paddingVertical: 10,
                borderRadius: 20,
                marginRight: 10,
              }}
            >
              <Text style={{ color: "#fff" }}>News</Text>
            </View>

            <View
              style={{
                backgroundColor: "#232323",
                paddingHorizontal: 18,
                paddingVertical: 10,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: "#fff" }}>Resources</Text>
            </View>
          </View>

          {/* Greeting */}

          <Text
            style={{
              color: "#fff",
              fontSize: 28,
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            Good evening!
          </Text>

          {/* Laptop Pass + Event Pass */}

          <View style={styles.laptopPass}>
            <View style={styles.laptopInfo}>
              <Text style={styles.cardTitle}>Laptop Pass</Text>

              <Text style={styles.passText}>PG0586DR</Text>
              <Text style={styles.passText}>Musham Gayathri Devi</Text>

              <TouchableOpacity style={styles.outlineButton}>
                <Text style={styles.buttonText}>View Details</Text>
              </TouchableOpacity>
            </View>

            <Image
              source={profilePhoto}
              style={styles.laptopPhoto}
              resizeMode="cover"
            />
          </View>

          {/* Event Pass */}

          {/* Event Pass */}

          <View style={styles.eventCard}>
            {/* LEFT SIDE */}

            <View style={styles.eventLeft}>
              <View style={styles.eventTitleRow}>
                <Icon
                  name="ticket-confirmation-outline"
                  size={28}
                  color="#8B5CF6"
                />

                <Text style={styles.eventTitle}>Event Pass</Text>
              </View>

              <Text style={styles.eventName}>HCL@50 Hyderabad</Text>

              <Text style={styles.eventDetails}>Zone - B</Text>

              <Text style={styles.eventDetails}>Gate - 1</Text>

              <Text style={styles.eventDetails}>Time - 4:30PM-5:45PM</Text>

              {/* Buttons */}

              <View style={styles.eventButtons}>
                <TouchableOpacity
                  style={styles.eventButton}
                  onPress={() => setShowEventPass(true)}
                >
                  <Text style={styles.eventButtonText}>View</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.eventButton}>
                  <Text style={styles.eventButtonText}>Refresh</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* RIGHT SIDE - ACTUAL EVENT PASS */}

            <View style={styles.eventImageContainer}>
              <Image
                source={eventPassImage}
                style={styles.eventPassImage}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Cards */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <DashboardCard
              title="Approvals"
              desc="Manage your pending approvals"
            />

            <DashboardCard
              title="Requests"
              desc="Details & statuses of your requests"
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <DashboardCard
              title="Timesheet"
              desc="Record and track your working hours"
            />

            <DashboardCard
              title="Leave Planner"
              desc="Manage leave and holiday calendar"
            />
          </View>
        </ScrollView>
      )}

      {/* {selectedTab === "Engage" && (
        <Text style={{ color: "white", fontSize: 25 }}>Engage Screen</Text>
      )}

      {selectedTab === "More" && (
        <Text style={{ color: "white", fontSize: 25 }}>More Screen</Text>
      )} */}

      {/* Favorites */}
      {selectedTab === "Activity" && (
        <>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              height: 58,
              marginBottom: 12,
            }}
            contentContainerStyle={{
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            {["Unread", "@Mentions", "Replies", "Reactions", "Calls"].map(
              (item) => (
                <View
                  key={item}
                  style={{
                    height: 44,
                    minWidth: item === "Unread" ? 105 : 120,
                    paddingHorizontal: 18,
                    backgroundColor: item === "Unread" ? "#6D5DF6" : "#232323",
                    borderRadius: 24,
                    marginRight: 10,

                    alignItems: "center",
                    justifyContent: "center",

                    // prevents the text from being squeezed/clipped
                    flexShrink: 0,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: "500",
                      includeFontPadding: false,
                    }}
                    numberOfLines={1}
                  >
                    {item}
                  </Text>
                </View>
              ),
            )}
          </ScrollView>

          <FlatList
            data={activities}
            contentContainerStyle={{
              paddingBottom: 100,
            }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 14,
                  borderBottomWidth: 0.5,
                  borderBottomColor: "#333",
                }}
              >
                <View
                  style={{
                    width: 55,
                    height: 55,
                    borderRadius: 27,
                    backgroundColor: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 10,
                  }}
                >
                  <Text style={{ color: "#ff6a00" }}>H</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Text>

                  <Text style={{ color: "#d9d9d9" }} numberOfLines={1}>
                    {item.message}
                  </Text>

                  <Text
                    style={{
                      color: "#bbb",
                      marginTop: 4,
                    }}
                  >
                    {item.source}
                  </Text>
                </View>

                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                  }}
                >
                  {item.time}
                </Text>
              </View>
            )}
          />
        </>
      )}

      {/* Floating Button */}

      <View style={styles.fab}>
        <Icon name="square-edit-outline" size={28} color="#000" />
      </View>

      {/* Bottom Navigation */}

      <View style={styles.bottomNav}>
        <NavItem
          icon="bell-outline"
          label="Activity"
          active={selectedTab === "Activity"}
          onPress={() => setSelectedTab("Activity")}
        />

        <NavItem
          icon="chat"
          label="Chat"
          active={selectedTab === "Chat"}
          onPress={() => setSelectedTab("Chat")}
        />

        <NavItem
          icon="calendar-month-outline"
          label="Calendar"
          active={selectedTab === "Calendar"}
          onPress={() => setSelectedTab("Calendar")}
        />

        <NavItem
          icon="office-building-outline"
          label="MyHCLTech"
          active={selectedTab === "MyHCLTech"}
          onPress={() => setSelectedTab("MyHCLTech")}
        />

        <NavItem icon="account-group-outline" label="Engage" active={false} />

        <NavItem icon="dots-horizontal" label="More" active={false} />
      </View>
    </View>
  );
}

function NavItem({ icon, label, active, onPress }: any) {
  return (
    <TouchableOpacity style={styles.navItem} onPress={onPress}>
      <Icon name={icon} size={22} color={active ? "#A970FF" : "#fff"} />

      <Text
        style={{
          color: active ? "#A970FF" : "#fff",
          fontSize: 10,
          marginTop: 3,
        }}
        numberOfLines={1}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
function DashboardCard({ title, desc }: any) {
  return (
    <View
      style={{
        width: "48%",
        backgroundColor: "#232323",
        borderRadius: 16,
        padding: 15,
        marginBottom: 15,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          color: "#d0d0d0",
          minHeight: 60,
        }}
      >
        {desc}
      </Text>

      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "#A970FF",
          padding: 8,
          borderRadius: 8,
          alignSelf: "flex-start",
          marginTop: 10,
        }}
      >
        <Text style={{ color: "#A970FF" }}>View</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101010",
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  profile: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  laptopPass: {
    backgroundColor: "#232323",
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  laptopInfo: {
    flex: 1,
  },

  cardTitle: {
    color: "#A970FF",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },

  passText: {
    color: "#fff",
    marginBottom: 2,
  },

  outlineButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#A970FF",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  buttonText: {
    color: "#A970FF",
  },
  monthCalendar: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },

  calendarDateCell: {
    width: "14.2857%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },

  calendarDateText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },

  selectedCalendarDate: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  selectedCalendarDateText: {
    color: "#7C5CFA",
    fontSize: 17,
    fontWeight: "600",
  },
  calendarContainer: {
    paddingBottom: 120,
  },

  calendarHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  calendarHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  calendarProfile: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },

  monthTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },

  calendarModeRow: {
    flexDirection: "row",
    marginBottom: 20,
  },

  agendaButton: {
    backgroundColor: "#8B5CF6",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 12,
  },

  dayButton: {
    backgroundColor: "#242424",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 25,
  },

  selectedModeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  modeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  weekDays: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 5,
  },

  weekDayText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    width: "14.2857%",
    textAlign: "center",
  },

  monthCalendar: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 5,
  },

  calendarDateCell: {
    width: "14.2857%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },

  calendarDateText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "500",
  },

  selectedCalendarDate: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  selectedCalendarDateText: {
    color: "#7C5CFA",
    fontSize: 17,
    fontWeight: "700",
  },

  calendarDivider: {
    height: 1,
    backgroundColor: "#383838",
    marginVertical: 15,
  },

  daySection: {
    marginBottom: 25,
  },

  dayHeading: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  dayDate: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },

  dayName: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 15,
  },

  calendarEvent: {
    flexDirection: "row",
    marginBottom: 20,
  },

  eventTimeColumn: {
    width: 55,
  },

  eventTime: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  eventDuration: {
    color: "#999",
    fontSize: 12,
    marginTop: 3,
  },

  eventLine: {
    width: 3,
    backgroundColor: "#8B5CF6",
    borderRadius: 2,
    marginRight: 12,
  },

  stripedLine: {
    backgroundColor: "#C084FC",
  },

  eventInfo: {
    flex: 1,
  },

  calendarEventTitle: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 21,
  },

  calendarEventSubtitle: {
    color: "#999",
    fontSize: 13,
    marginTop: 5,
  },

  eventTitleWithIcon: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
  },

  noEvents: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 45,
  },

  noEventsText: {
    color: "#888",
    fontSize: 15,
    marginTop: 10,
  },

  todayButton: {
    position: "absolute",
    right: 85,
    bottom: 25,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#232323",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },

  todayText: {
    color: "#A970FF",
    marginLeft: 5,
    fontWeight: "600",
  },

  addEventButton: {
    position: "absolute",
    right: 15,
    bottom: 15,
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#A970FF",
    justifyContent: "center",
    alignItems: "center",
  },

  plusText: {
    color: "#000",
    fontSize: 32,
    fontWeight: "300",
  },

  eventCard: {
    backgroundColor: "#232323",
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,

    flexDirection: "row",
    alignItems: "center",

    minHeight: 210,
  },

  eventLeft: {
    flex: 1,
    paddingRight: 10,
  },

  eventTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  eventTitle: {
    color: "#A970FF",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 7,
  },

  eventName: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  eventDetails: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 3,
  },

  eventButtons: {
    flexDirection: "row",
    marginTop: 12,
  },

  eventButton: {
    borderWidth: 1,
    borderColor: "#A970FF",
    paddingHorizontal: 18,
    paddingVertical: 9,
    borderRadius: 7,
    marginRight: 10,
  },

  eventButtonText: {
    color: "#A970FF",
    fontSize: 15,
    fontWeight: "600",
  },

  eventImageContainer: {
    width: 145,
    height: 185,
    marginLeft: 5,

    justifyContent: "center",
    alignItems: "center",
  },

  eventPassImage: {
    width: 145,
    height: 185,
    borderRadius: 10,
  },

  laptopPhoto: {
    width: 90,
    height: 110,
    borderRadius: 12,
    marginLeft: 12,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginLeft: 12,
  },

  headerIcons: {
    flexDirection: "row",
    marginLeft: "auto",
  },

  card: {
    width: 70,
    height: 70,
    backgroundColor: "#232323",
    borderRadius: 16,
    marginRight: 10,
    justifyContent: "center",
    marginBottom: 40,
    alignItems: "center",
  },

  cardText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 20,
  },

  favoriteRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 10,
  },

  chatRow: {
    flexDirection: "row",
    marginBottom: 18,
    alignItems: "center",
  },

  chatIcon: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#C084FC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  name: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },

  message: {
    color: "#CFCFCF",
    marginTop: 3,
  },

  time: {
    color: "#fff",
    fontSize: 12,
  },

  fab: {
    position: "absolute",
    bottom: 110,
    right: 25,
    width: 65,
    height: 65,
    borderRadius: 32,
    backgroundColor: "#C084FC",
    justifyContent: "center",
    alignItems: "center",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#151515",
    borderTopWidth: 0.5,
    borderTopColor: "#333",
    paddingVertical: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#101010",
    justifyContent: "center",
    alignItems: "center",
  },

  closeButton: {
    position: "absolute",
    top: 45,
    right: 20,
    zIndex: 10,
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#232323",
    justifyContent: "center",
    alignItems: "center",
  },

  fullEventPass: {
    width: "95%",
    height: "90%",
  },

  navItem: {
    alignItems: "center",
    flex: 1,
  },
});
