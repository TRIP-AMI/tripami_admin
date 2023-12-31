export type UserStatus = "ACTIVE" | "INACTIVE" | "DORMANCY" | "BANNED";

export const MemberStatus: Record<UserStatus, string> = {
  ACTIVE: "활동중",
  INACTIVE: "탈퇴",
  DORMANCY: "휴면",
  BANNED: "블랙",
};

export interface MemberListDataType {
  id: number;
  username: string;
  userEmail: string;
  joinDate: Date;
  userState: UserStatus;
}
