package com.jedify.myunitechlibrary
import android.os.Build;
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback


class UnitechLibraryModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "UnitechLibrary"
    }

    @ReactMethod
    fun getDeviceName(callback: Callback) {
        val deviceName = Build.MODEL
        callback.invoke(deviceName)
    }
}