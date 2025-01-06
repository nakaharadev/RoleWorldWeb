import React from "react";

let en = {
    "name": "en",
    "menu_profile_btn": "Profile",
    "menu_characters_btn": "Characters",
    "menu_chats_btn": "Chats",
    "profile_friends_block_title": "Friends",
    "profile_friends_block_empty": "You haven't friends yet :(",
    "profile_characters_block_title": "Characters",
    "profile_characters_block_empty": "You haven't characters yet :(",
    "characters_list_empty_hint": "You haven't characters yet.<br/>Do you want to",
    "characters_list_empty_span": "create new",
    "sign_in": "Sign In",
    "sign_up": "Sign Up",
    "email": "email",
    "password": "password",
    "nickname": "nickname",
    "repeat_password": "repeat password",
    "auth_done": "Sign up",
    "auth_done_in": "Sign in",
    "description": "Description",
    "bio": "Bio",
    "character_data_empty_hint": "Empty :(",
    "chats_list_empty_hint": "Not yet chats here.<br/>Do you want to",
    "chats_list_empty_span": "create chat",
    "menu_settings_btn": "Settings",
    "settings_field_lang": "Language",
    "dark_theme": "Dark theme",
    "settings_customization_block_title": "Customization",
    "done": "Done"
}

let ru = {
    "name": "ru",
    "menu_profile_btn": "Профиль",
    "menu_characters_btn": "Персонажи",
    "menu_chats_btn": "Чаты",
    "profile_friends_block_title": "Друзья",
    "profile_friends_block_empty": "Пока нет друзей :(",
    "profile_characters_block_title": "Персонажи",
    "profile_characters_block_empty": "Пока нет персонажей :(",
    "characters_list_empty_hint": "У тебя пока нет персонажей.<br/>Хочешь",
    "characters_list_empty_span": "создать нового",
    "sign_in": "Зайти в акк",
    "sign_up": "Или создать новый",
    "email": "почта",
    "password": "пароль",
    "nickname": "ник",
    "repeat_password": "повтори пароль",
    "auth_done": "Регистрация",
    "auth_done_in": "Вход",
    "description": "Описание",
    "bio": "Биография",
    "character_data_empty_hint": "Тут пока пусто :(",
    "chats_list_empty_hint": "Пока что чатов нет.<br/>Хочешь",
    "chats_list_empty_span": "создать чат",
    "menu_settings_btn": "Настройки",
    "settings_field_lang": "Язык",
    "dark_theme": "Тёмная тема",
    "settings_customization_block_title": "Кастомизация",
    "done": "Готово"
}

export let langNames = {
    EN: "en",
    RU: "ru"
}

export let langs = {
    "ru": ru,
    "en": en
}

export const LanguageContext = React.createContext({
    "lang": langs.en,
    "isEn": true,
    "ruEnToggle": () => {}
});