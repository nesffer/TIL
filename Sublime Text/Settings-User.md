### 사용자 설정
`Preferences → Settings - User`
```json
{
    "theme": "Default.sublime-theme",
    "color_scheme": "Packages/User/SublimeLinter/Monokai (SL).tmTheme",
    "caret_style": "phase",
    "font_face": "Consolas",
    "font_size": 12,
    "tab_size": 4,
    "word_wrap": true,
    "draw_white_space": "all",
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": true,
    "ensure_newline_at_eof_on_save": true,
    "default_line_ending": "unix",
    "rulers": [80, 120],
    "highlight_line": true,
    "fade_fold_buttons": false,
    "bold_folder_labels": true,
    "highlight_modified_tabs": true,
    "line_padding_top": 1,
    "line_padding_bottom": 1,
    "always_show_minimap_viewport": true,
    "draw_minimap_border": true,
    "ignored_packages": [
        // "Vintage"
    ],
    "vintage_start_in_command_mode": true,
}
```

### Settings - User 항목 설명
| 항목 | 설명 |
| :--- | :--- |
| theme | 레이아웃 테마 |
| color_scheme | 문자 색상 테마 |
| font-face | 글꼴 |
| font-size | 글꼴 크기 |
| teb_size | 탭 간격 |
| word_wrap | true(자동 줄 바꿈 사용) / false(자동 줄 바꿈 미 사용) |
| draw_white_space | 탭, 공백 시각화하기 |
| translate_tabs_to_spaces | true(스페이스) / false(탭) |
| trim_trailing_white_space_on_save | 저장 시 줄끝 공백 제거 |
| ensure_newline_at_eof_on_save | 저장 시 문서 마지막 줄에 빈 줄없으면 추가 |
| default_line_ending | 줄바꿈 문자 형식 지정(system, windows, unix) |
| rulers | 지정한 가로 문자열 위치에 라인 표시 |
| highlight_line | 현재 줄 강조 |
| fade_fold_buttons | true(코드 접기 미 사용) / false(코드 접기 사용) |
| bold_folder_labels | true(폴더 굵게 표시) / false(폴더 굵게 표시) |
| caret_style | 커서 스타일("solid","wide","blink", "phase", "smooth") |
| highlight_modified_tabs | 변경된 파일 탭 색상 표시 true/false |
| line_padding_top | 줄 간격 상단 여백 |
| line_padding_bottom | 줄 간격 하단 여백 |
| always_show_minimap_viewport | 미니맵에서 현재 위치 시각화하기 |
| draw_minimap_border | 미니맵 현재 위치 시각화에 테두리 표기하기 |
| ignored_packages | 무시할 패키지를 배열로 설정 |
| vintage_start_in_command_mode | Vintage(Vim) 명령 모드로 시작 |
