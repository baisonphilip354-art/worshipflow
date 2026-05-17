// User Types
export type UserRole = 'super_admin' | 'pastor' | 'treasurer' | 'department_leader' | 'member';

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

// Member Types
export type MembershipStatus = 'active' | 'inactive' | 'visiting';
export type BaptismStatus = 'yes' | 'no' | 'pending';

export interface Member {
  id: string;
  fullname: string;
  gender: 'male' | 'female' | 'other';
  date_of_birth: string;
  phone: string;
  email: string;
  address: string;
  emergency_contact: string;
  department_id: string;
  membership_status: MembershipStatus;
  baptism_status: BaptismStatus;
  date_joined: string;
  profile_image: string | null;
  created_at: string;
  updated_at: string;
}

// Attendance Types
export type ServiceType = 'sunday_service' | 'prayer_meeting' | 'bible_study' | 'special_event';
export type AttendanceStatus = 'present' | 'absent' | 'late' | 'excused';

export interface Attendance {
  id: string;
  member_id: string;
  service_date: string;
  service_type: ServiceType;
  attendance_status: AttendanceStatus;
  notes: string | null;
  created_at: string;
}

// Finance Types
export type FinanceCategory = 'tithe' | 'offering' | 'donation' | 'thanksgiving' | 'special_seed';
export type PaymentMethod = 'cash' | 'bank_transfer' | 'check' | 'mobile_money';

export interface Finance {
  id: string;
  member_id: string | null;
  amount: number;
  category: FinanceCategory;
  payment_method: PaymentMethod;
  transaction_date: string;
  notes: string | null;
  created_at: string;
}

// Event Types
export interface Event {
  id: string;
  title: string;
  description: string;
  speaker: string;
  venue: string;
  start_date: string;
  end_date: string;
  banner_image: string | null;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface EventRSVP {
  id: string;
  event_id: string;
  member_id: string;
  rsvp_status: 'yes' | 'no' | 'maybe';
  created_at: string;
}

// Announcement Types
export interface Announcement {
  id: string;
  title: string;
  content: string;
  priority: 'low' | 'normal' | 'high' | 'urgent';
  is_pinned: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
}

// Department Types
export interface Department {
  id: string;
  name: string;
  description: string | null;
  leader_id: string | null;
  created_at: string;
}

// Dashboard Stats
export interface DashboardStats {
  total_members: number;
  total_attendance_today: number;
  total_donations: number;
  weekly_attendance: { date: string; count: number }[];
  recent_activities: Activity[];
  upcoming_events: Event[];
}

export interface Activity {
  id: string;
  type: 'member_joined' | 'donation' | 'event_created' | 'announcement_posted';
  description: string;
  created_at: string;
  actor_name: string;
}
