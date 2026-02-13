# CyphraClient

A cross-platform .NET CLI application that runs on Windows and Linux.

## Prerequisites

- [.NET 8.0 SDK](https://dotnet.microsoft.com/download/dotnet/8.0) or later

### Verify Installation

```bash
dotnet --version
```

## Development Mode

### Build the Project

```bash
cd client
dotnet build
```

### Run in Development Mode

```bash
dotnet run
```

Development mode includes:
- Faster startup (no optimization)
- Debug symbols included
- Automatic compilation before running

### Run with Arguments

```bash
dotnet run -- [your-arguments-here]
```

### Watch Mode (Auto-reload on changes)

```bash
dotnet watch run
```

## Production Mode

### Build for Production

Build optimized release version:

```bash
dotnet build -c Release
```

### Publish Self-Contained Executable

#### For Linux (x64)

```bash
dotnet publish -c Release -r linux-x64 --self-contained -o ./publish/linux-x64
```

Run the published app:
```bash
./publish/linux-x64/CyphraClient
```

#### For Windows (x64)

```bash
dotnet publish -c Release -r win-x64 --self-contained -o ./publish/win-x64
```

Run the published app:
```powershell
.\publish\win-x64\CyphraClient.exe
```

#### For macOS (ARM64 - Apple Silicon)

```bash
dotnet publish -c Release -r osx-arm64 --self-contained -o ./publish/osx-arm64
```

### Publish Framework-Dependent

Smaller executables that require .NET runtime installed on target machine:

```bash
# Linux
dotnet publish -c Release -r linux-x64 --no-self-contained -o ./publish/linux-x64-fd

# Windows
dotnet publish -c Release -r win-x64 --no-self-contained -o ./publish/win-x64-fd
```

### Single-File Executable

Create a single executable file:

```bash
# Linux
dotnet publish -c Release -r linux-x64 --self-contained -p:PublishSingleFile=true -o ./publish/single/linux

# Windows
dotnet publish -c Release -r win-x64 --self-contained -p:PublishSingleFile=true -o ./publish/single/windows
```

## Project Structure

```
CyphraClient/
├── CyphraClient.csproj    # Project configuration
├── Program.cs             # Application entry point
├── bin/                   # Build output (gitignored)
├── obj/                   # Intermediate files (gitignored)
└── publish/               # Published executables (gitignored)
```

## Common Commands

| Command | Description |
|---------|-------------|
| `dotnet restore` | Restore NuGet packages |
| `dotnet build` | Build the project (Debug) |
| `dotnet build -c Release` | Build optimized for production |
| `dotnet run` | Build and run in development mode |
| `dotnet test` | Run tests (when added) |
| `dotnet clean` | Remove build artifacts |
| `dotnet publish` | Publish production-ready app |

## Runtime Identifiers (RID)

Common RID values for cross-platform publishing:

- `linux-x64` - Linux 64-bit
- `linux-arm64` - Linux ARM 64-bit (Raspberry Pi, etc.)
- `win-x64` - Windows 64-bit
- `win-arm64` - Windows ARM 64-bit
- `osx-x64` - macOS Intel
- `osx-arm64` - macOS Apple Silicon

[Full RID catalog](https://learn.microsoft.com/en-us/dotnet/core/rid-catalog)

## Performance Tips

1. **Release builds** are ~30% faster than Debug builds
2. **Self-contained** apps start faster but are larger (~70MB vs 150KB)
3. **Single-file** executables are convenient but slightly slower to start
4. Use **ReadyToRun (R2R)** for faster startup: `-p:PublishReadyToRun=true`

## Troubleshooting

### "dotnet: command not found"

Install .NET SDK from [dotnet.microsoft.com](https://dotnet.microsoft.com/download)

### Permission denied on Linux/macOS

Make the published executable executable:
```bash
chmod +x ./publish/linux-x64/CyphraClient
```

### Missing dependencies on Linux

Install required libraries:
```bash
sudo apt-get install -y libicu-dev
```

## License

See [LICENSE](../LICENSE) file in the root directory.
