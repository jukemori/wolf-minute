// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import CalendarController from "./calendar_controller"
application.register("calendar", CalendarController)

import FlatpickrController from "./flatpickr_controller"
application.register("flatpickr", FlatpickrController)

import FormStepsController from "./form_steps_controller"
application.register("form-steps", FormStepsController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import MeetingController from "./meeting_controller"
application.register("meeting", MeetingController)

import MeetingSubscriptionController from "./meeting_subscription_controller"
application.register("meeting-subscription", MeetingSubscriptionController)

import PopoverController from "./popover_controller"
application.register("popover", PopoverController)

import ProgressBarController from "./progress_bar_controller"
application.register("progress-bar", ProgressBarController)

import SearchUsersController from "./search_users_controller"
application.register("search-users", SearchUsersController)
