package main

import (
	"log"
	"os"
)

// Logger is an interface for logging
type Logger interface {
	Info(message string)
	Warn(message string)
	Error(message string)
}

type loggerImpl struct {
	infoLogger  *log.Logger
	warnLogger  *log.Logger
	errorLogger *log.Logger
}

// NewLogger creates a new Logger instance
func NewLogger() Logger {
	return &loggerImpl{
		infoLogger:  log.New(os.Stdout, "INFO: ", log.Ldate|log.Ltime|log.Lshortfile),
		warnLogger:  log.New(os.Stdout, "WARN: ", log.Ldate|log.Ltime|log.Lshortfile),
		errorLogger: log.New(os.Stderr, "ERROR: ", log.Ldate|log.Ltime|log.Lshortfile),
	}
}

// Info logs an informational message
func (l *loggerImpl) Info(message string) {
	l.infoLogger.Println(message)
}

// Warn logs a warning message
func (l *loggerImpl) Warn(message string) {
	l.warnLogger.Println(message)
}

// Error logs an error message
func (l *loggerImpl) Error(message string) {
	l.errorLogger.Println(message)
}
