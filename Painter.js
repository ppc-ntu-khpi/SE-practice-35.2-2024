class Painter{
    getPrimaryBackgroundColor(style){
        switch (style) {
            case "blue":
                return "rgb(37, 112, 212)";
            case  "green":
                return "rgba(29, 237, 131)";
        }
    }

    getSecondaryBackgroundColor(style){
        switch (style) {
            case "blue":
                return "rgb(20, 58, 112)";
            case  "green":
                return "rgb(19, 128, 72)";
        }
    }

    getPrimaryTextColor(style){
        switch (style) {
            case "blue":
                return "rgba(37, 112, 212, 1)";
            case  "green":
                return "rgba(29, 237, 131, 1)";
        }
    }

    getMainGradientColor(style){
        switch (style) {
            case "blue":
                return "radial-gradient(50% 50% at 50% 50%, rgba(37, 112, 212, 0.5) 0%, rgba(0, 0, 0, 0) 100%)";
            case  "green":
                return "radial-gradient(50% 50% at 50% 50%, rgba(29, 237, 131, 0.5) 0%, rgba(0, 0, 0, 0) 100%)";
        }
    }
}