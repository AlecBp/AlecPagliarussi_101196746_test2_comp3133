export interface Mission {
  crew: any;
  details: string;
  flight_number: number;
  is_tentative: boolean;
  launch_date_local: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_failure_details: LaunchFailureDetails;
  launch_site: LaunchSite;
  launch_success: boolean;
  launch_window: number;
  launch_year: string;
  links: Links;
  mission_id: any;
  mission_name: string;
  rocket: any;
  ships: any;
  static_fire_date_unix: number;
  static_fire_date_utc: string;
  tbd: boolean;
  telemetry: any;
  tentative_max_precision: string;
  timeline: { webcast_liftoff: number };
  upcoming: boolean;
}

export interface LaunchFailureDetails {
  altitude: any;
  reason: string;
  time: number;
}

export interface LaunchSite {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface Links {
  article_link: string;
  flickr_images: any;
  mission_patch: string;
  mission_patch_small: string;
  presskit: any;
  reddit_campaign: any;
  reddit_launch: any;
  reddit_media: any;
  reddit_recovery: any;
  video_link: string;
  wikipedia: string;
  youtube_id: string;
}

export interface Rocket {
  fairings: {
    recovered: boolean;
    recovery_attempt: boolean;
    reused: boolean;
    ship: any;
  };
  first_stage: Core[];
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  second_stage: any;
}
export interface Core {
  core_serial: string;
  flight: number;
  block: any;
  gridfins: boolean;
  legs: boolean;
  land_success: any;
  landing_intent: boolean;
  landing_type: any;
  landing_vehicle: any;
  reused: boolean;
}
