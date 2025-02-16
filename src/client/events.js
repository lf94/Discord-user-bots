/**
 *
 *  ## OVERVIEW
 *
 *  Specifies all the events the client can listen on.
 *
 *  ## WHEN CONTRIBUTING:
 *
 *  If the event contains data meant for the user, include it as a "message" parameter.
 *
 */

class DiscordEvents {
    voice_server_update(message) {}
    user_update(message) {}
    application_command_create(message) {}
    application_command_update(message) {}
    application_command_delete(message) {}
    interaction_create(message) {}
    guild_create(message) {}
    guild_delete(message) {}
    guild_role_create(message) {}
    guild_role_update(message) {}
    guild_role_delete(message) {}
    thread_create(message) {}
    thread_join(message) {}
    thread_update(message) {}
    thread_delete(message) {}
    thread_list_sync(message) {}
    thread_member_update(message) {}
    thread_members_update(message) {}
    channel_create(message) {}
    channel_update(message) {}
    channel_delete(message) {}
    channel_pins_update(message) {}
    guild_member_add(message) {}
    guild_member_update(message) {}
    guild_member_remove(message) {}
    guild_ban_add(message) {}
    guild_ban_remove(message) {}
    guild_emojis_update(message) {}
    guild_stickers_update(message) {}
    guild_integrations_update(message) {}
    guild_webhooks_update(message) {}
    invite_create(message) {}
    invite_delete(message) {}
    voice_state_update(message) {}
    presence_update(message) {}
    message_create(message) {}
    message_update(message) {}
    message_delete(message) {}
    message_delete_bulk(message) {}
    message_reaction_add(message) {}
    message_reaction_remove(message) {}
    message_reaction_remove_all(message) {}
    message_reaction_remove_emoji(message) {}
    typing_start(message) {}
    relationship_add(message) {}
    relationship_remove(message) {}

    // Custom made ones
    discord_disconnect() {}
    gateway() {}
    heartbeat_sent() {}
    heartbeat_received() {}
    ready() {}
    message_edit(message) {}
    recipient_add(message) {}
    recipient_remove(message) {}
    call(message) {}
    channel_name_change(message) {}
    channel_icon_change(message) {}
    channel_pinned_message(message) {}
    user_join(message) {}
    guild_boost(message) {}
    guild_boost_tier_1(message) {}
    guild_boost_tier_2(message) {}
    guild_boost_tier_3(message) {}
    channel_follow_add(message) {}
    guild_discovery_disqualified(message) {}
    guild_discovery_requalified(message) {}
    guild_discovery_grace_period_initial_warning(message) {}
    guild_discovery_grace_period_final_warning(message) {}
    reply(message) {}
    chat_input_command(message) {}
    thread_starter_message(message) {}
    guild_invite_reminder(message) {}
    context_menu_command(message) {}
    auto_moderation_action(message) {}
    role_subscription_purchase(message) {}
    interaction_premium_upsell(message) {}
    guild_application_premium_subscription(message) {}
}

module.exports = DiscordEvents;
