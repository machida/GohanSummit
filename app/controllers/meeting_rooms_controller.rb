# frozen_string_literal: true

class MeetingRoomsController < ApplicationController
  def show
    @meeting_room = current_user.family.meeting_rooms.find(params[:id])
    remarks = @meeting_room.remarks.includes([:user])
    @proposals = remarks.proposals.order(created_at: :desc)
    @comments = remarks.comments.order(created_at: :desc)
  end

  def create
    meal_plan = current_user.family.meal_plans.find_or_create_by(meal_date: params[:meal_date]) do |mp|
      mp.save(validate: false)
    end
    meeting_room = current_user.family.meeting_rooms.find_or_create_by(meal_plan:)
    redirect_to meeting_room_path(meeting_room)
  end
end
