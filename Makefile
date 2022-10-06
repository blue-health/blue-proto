NO_COLOR=\033[0m
OK_COLOR=\033[32;01m
ERROR_COLOR=\033[31;01m
WARN_COLOR=\033[33;01m

SERVICE_NAME=billing-srv
EVENT_DEFINITIONS=definitions/events
EVENT_DEFINITIONS_PATH=definitions/events/**/*.proto
GO_OUT_EVENT_DEFINTIONS=generated/go/events

.PHONY: all events
all: events

events:
	@echo "$(OK_COLOR)==> Generating Go code for events...$(NO_COLOR)"
	@protoc --proto_path=$(EVENT_DEFINITIONS) $(EVENT_DEFINITIONS_PATH) --go_out=$(GO_OUT_EVENT_DEFINTIONS) --go_opt=paths=source_relative
