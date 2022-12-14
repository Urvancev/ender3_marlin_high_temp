module.exports = {
    extends: "builds/default.js",
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-base-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-base-{{uid}}"
    },
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "(Dust, valerionew, Ender-3, zisismaras)"],
            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER",
            ["HEATER_0_MAXTEMP", 350],
            ["HEATER_1_MAXTEMP", 350],
            ["HEATER_2_MAXTEMP", 350],
            ["HEATER_3_MAXTEMP", 350],
            ["HEATER_4_MAXTEMP", 350],
            ["HEATER_5_MAXTEMP", 350],
            ["HEATER_6_MAXTEMP", 350],
            ["HEATER_7_MAXTEMP", 350],
            ["BED_MAXTEMP", 135],
            ["TEMP_SENSOR_0", 1047],
            "PID_AUTOTUNE_MENU",
            //["MAX31865_SENSOR_OHMS_0", 100],
            //["MAX31865_CALIBRATION_OHMS_0", 430]
        ]
    },
    configuration_adv: {
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS"
        ]
    }
};
