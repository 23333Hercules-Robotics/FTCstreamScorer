package org.ftc.scorer.ui;

/**
 * Configuration class for emoji icons used in the stream output
 * Allows easy customization of visual elements without changing core logic
 */
public class EmojiConfig {
    // Icon emojis for scoring elements
    public static final String CLASSIFIED_ICON = "📦";
    public static final String OVERFLOW_ICON = "💧";
    public static final String LEAVE_ICON = "🚀";
    public static final String BASE_ICON = "🏠";
    public static final String PATTERN_ICON = "🎨";
    public static final String FOUL_ICON = "⚠️";
    
    // Additional UI emojis
    public static final String TROPHY_ICON = "🏆";
    public static final String TIMER_ICON = "⏱️";
    public static final String TEAM_ICON = "👥";
    
    /**
     * Get emoji for a given icon name
     * @param iconName The name of the icon (e.g., "classified_icon", "overflow_icon")
     * @return The emoji string for that icon
     */
    public static String getEmoji(String iconName) {
        switch (iconName) {
            case "classified_icon":
                return CLASSIFIED_ICON;
            case "overflow_icon":
                return OVERFLOW_ICON;
            case "leave_icon":
                return LEAVE_ICON;
            case "base_icon":
                return BASE_ICON;
            case "pattern_icon":
                return PATTERN_ICON;
            case "foul_icon":
                return FOUL_ICON;
            case "trophy_icon":
                return TROPHY_ICON;
            case "timer_icon":
                return TIMER_ICON;
            case "team_icon":
                return TEAM_ICON;
            default:
                return "❓"; // Unknown icon
        }
    }
}
