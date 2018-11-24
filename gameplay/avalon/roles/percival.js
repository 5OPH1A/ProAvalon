function Percival(thisRoom_) {

    this.thisRoom = thisRoom_;

    this.role = "Percival";
    this.alliance = "Resistance";
    
    this.test = function(){
        // The following lines running successfully shows that each role file can access
        // the variables and functions from the game room!
        console.log("HII from Percival. I will send messages to players through socket.emit()");
        var data = {
            message: "LOLOL FROM PERCY",
            classStr: "server-text"
        }

        this.thisRoom.io.in(this.thisRoom.roomId).emit("roomChatToClient", data);
    }

    // Percival sees Merlin and Morgana
    this.see = function(){
        var obj = {};
        var array = [];

        for (var i = 0; i < this.thisRoom.playersInGame.length; i++) {
            if (this.thisRoom.playersInGame[i].role === "Merlin" || this.thisRoom.playersInGame[i].role === "Morgana") {
                array.push(this.thisRoom.playersInGame[i].username);
            }
        } 
        obj.merlins = array;
        return obj;
    }
}


module.exports = Percival;