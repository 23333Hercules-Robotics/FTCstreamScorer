package org.ftc.scorer.model;

/**
 * Represents a single FTC match with both alliances
 */
public class Match {
    private String matchNumber;
    private DecodeScore redScore;
    private DecodeScore blueScore;
    private MatchState state;
    private MatchType matchType;
    private long startTime;
    
    public Match(String matchNumber) {
        this(matchNumber, MatchType.TRADITIONAL_MATCH);
    }
    
    public Match(String matchNumber, MatchType matchType) {
        this.matchNumber = matchNumber;
        this.matchType = matchType;
        this.redScore = new DecodeScore();
        this.blueScore = new DecodeScore();
        this.state = MatchState.NOT_STARTED;
        this.startTime = 0;
    }
    
    public String getMatchNumber() {
        return matchNumber;
    }
    
    public void setMatchNumber(String matchNumber) {
        this.matchNumber = matchNumber;
    }
    
    public DecodeScore getRedScore() {
        return redScore;
    }
    
    public DecodeScore getBlueScore() {
        return blueScore;
    }
    
    public MatchState getState() {
        return state;
    }
    
    public void setState(MatchState state) {
        this.state = state;
    }
    
    public long getStartTime() {
        return startTime;
    }
    
    public void setStartTime(long startTime) {
        this.startTime = startTime;
    }
    
    public MatchType getMatchType() {
        return matchType;
    }
    
    public void setMatchType(MatchType matchType) {
        this.matchType = matchType;
    }
    
    public boolean isSingleTeamMode() {
        return matchType == MatchType.SINGLE_TEAM_DEMO;
    }
    
    public void reset() {
        redScore.reset();
        blueScore.reset();
        state = MatchState.NOT_STARTED;
        startTime = 0;
    }
    
    public enum MatchState {
        NOT_STARTED,
        AUTONOMOUS,
        TELEOP,
        END_GAME,
        FINISHED
    }
    
    public enum MatchType {
        TRADITIONAL_MATCH,  // 2v2 alliance match (Red vs Blue)
        SINGLE_TEAM_DEMO    // Single team demonstration/practice mode
    }
}
