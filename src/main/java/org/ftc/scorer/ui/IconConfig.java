package org.ftc.scorer.ui;

/**
 * Configuration class for UI icons using emoji
 * Provides a centralized place to configure all icon emojis used in the application
 */
public class IconConfig {
    // Scoring category icons
    private static String classifiedIcon = "🎯"; // Classified samples
    private static String overflowIcon = "📦"; // Overflow
    private static String patternIcon = "⭐"; // Pattern matches / motif
    private static String leaveIcon = "🚀"; // Leave starting zone
    private static String baseIcon = "🏠"; // Base return
    private static String foulIcon = "⚠️"; // Fouls/penalties
    
    // Other UI icons
    private static String trophyIcon = "🏆"; // Winner trophy
    private static String tieIcon = "🤝"; // Tie match
    
    // Getters
    public static String getClassifiedIcon() {
        return classifiedIcon;
    }
    
    public static String getOverflowIcon() {
        return overflowIcon;
    }
    
    public static String getPatternIcon() {
        return patternIcon;
    }
    
    public static String getLeaveIcon() {
        return leaveIcon;
    }
    
    public static String getBaseIcon() {
        return baseIcon;
    }
    
    public static String getFoulIcon() {
        return foulIcon;
    }
    
    public static String getTrophyIcon() {
        return trophyIcon;
    }
    
    public static String getTieIcon() {
        return tieIcon;
    }
    
    // Setters for configuration
    public static void setClassifiedIcon(String icon) {
        classifiedIcon = icon;
    }
    
    public static void setOverflowIcon(String icon) {
        overflowIcon = icon;
    }
    
    public static void setPatternIcon(String icon) {
        patternIcon = icon;
    }
    
    public static void setLeaveIcon(String icon) {
        leaveIcon = icon;
    }
    
    public static void setBaseIcon(String icon) {
        baseIcon = icon;
    }
    
    public static void setFoulIcon(String icon) {
        foulIcon = icon;
    }
    
    public static void setTrophyIcon(String icon) {
        trophyIcon = icon;
    }
    
    public static void setTieIcon(String icon) {
        tieIcon = icon;
    }
    
    /**
     * Get icon by name (used for backward compatibility with icon names)
     */
    public static String getIconByName(String iconName) {
        switch (iconName) {
            case "classified_icon":
                return classifiedIcon;
            case "overflow_icon":
                return overflowIcon;
            case "pattern_icon":
                return patternIcon;
            case "leave_icon":
                return leaveIcon;
            case "base_icon":
                return baseIcon;
            case "foul_icon":
                return foulIcon;
            default:
                return "❓"; // Unknown icon
        }
    }
}
