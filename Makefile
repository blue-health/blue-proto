NO_COLOR=\033[0m
OK_COLOR=\033[32;01m
ERROR_COLOR=\033[31;01m
WARN_COLOR=\033[33;01m

EVENT_DEFINITIONS=definitions/events
EVENT_DEFINITIONS_PATH=definitions/events/**/*.proto
GO_OUT_EVENT_DEFINTIONS=generated/go/events
TS_OUT_EVENT_DEFINTIONS=generated/ts/events
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

.PHONY: all events
all: events

events: scrub-events
	@echo "$(OK_COLOR)==> Generating Go code for events...$(NO_COLOR)"
	@protoc --proto_path=$(EVENT_DEFINITIONS) --go_out=$(GO_OUT_EVENT_DEFINTIONS) --go_opt=paths=source_relative $(EVENT_DEFINITIONS_PATH)
	@protoc --proto_path=$(EVENT_DEFINITIONS) --plugin="protoc-gen-ts=$(PROTOC_GEN_TS_PATH)" --js_out="import_style=commonjs,binary:$(TS_OUT_EVENT_DEFINTIONS)" --ts_out="$(TS_OUT_EVENT_DEFINTIONS)" $(EVENT_DEFINITIONS_PATH)

scrub-events:
	@echo "$(OK_COLOR)==> Scrubbing generated Go code for events...$(NO_COLOR)"
	@rm -r $(GO_OUT_EVENT_DEFINTIONS)
	@mkdir -p $(GO_OUT_EVENT_DEFINTIONS)
	@rm -r $(TS_OUT_EVENT_DEFINTIONS)
	@mkdir -p $(TS_OUT_EVENT_DEFINTIONS)
