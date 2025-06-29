# 🐾 Pet Delete Service - Shaggy Mission

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
  <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger" />
</div>

<div align="center">
  <h3>🗑️ Pet Information Deletion Microservice for Street Animal Rescue</h3>
  <p><em>Part of the Shaggy Mission ecosystem - Managing pet record lifecycle with safe deletion! 🐕🐱</em></p>
</div>

---

## 🌟 Overview

The **Pet Delete Service** is a specialized microservice in the Shaggy Mission platform that handles the secure deletion of pet records. This service enables rescue organizations, administrators, and authorized users to remove pet profiles from the system when pets have been successfully adopted, relocated, or when records need to be cleaned up for data management purposes.

## 🎯 What This Service Does

- **Pet Record Deletion**: Permanently remove pet profiles from the database
- **Safe Deletion Process**: Validate pet existence before deletion
- **Data Cleanup**: Maintain database integrity by removing outdated records
- **Adoption Success Tracking**: Remove successfully adopted pets from active listings
- **Administrative Management**: Allow authorized users to manage pet record lifecycle
- **Error Handling**: Comprehensive validation and error management
- **Confirmation Response**: Provide clear feedback on deletion operations

## 🛠️ Tech Stack

- **Runtime**: Node.js with Express.js framework
- **Database**: MongoDB Atlas with Mongoose ODM
- **Data Validation**: MongoDB ObjectId validation and existence checking
- **RESTful Design**: Clean DELETE endpoint for resource removal
- **Documentation**: Swagger UI for interactive API documentation
- **Error Handling**: Comprehensive error management and logging

## 📡 API Endpoints

### Pet Deletion Endpoint
**`DELETE /pets/:id`**
- Permanently deletes a pet record by MongoDB ObjectId
- Validates pet ID format and existence before deletion
- Returns confirmation message upon successful deletion
- Handles errors gracefully with appropriate HTTP status codes

**Request Example:**
```bash
DELETE /pets/64f8b2a1c3d4e5f6a7b8c9d0
```

**Successful Response Example:**
```json
{
  "message": "Pet deleted successfully"
}
```

**Error Responses:**
- `404 Not Found`: Pet with specified ID doesn't exist
  ```json
  {
    "message": "Pet not found"
  }
  ```
- `400 Bad Request`: Invalid ObjectId format
- `500 Internal Server Error`: Database connection or server issues
  ```json
  {
    "message": "Internal server error"
  }
  ```

### API Documentation
**`GET /deletePets-docs`**
- Interactive Swagger UI documentation
- Complete API specification with examples
- Request/response schemas and validation rules
- Try-it-out functionality for testing deletions

## 🔧 Core Functionality

### Deletion Process
The service handles pet deletion by accepting a MongoDB ObjectId in the URL path, validating the ID format and pet existence, permanently removing the pet record from the database using `findByIdAndDelete`, and returning a confirmation message upon successful deletion.

### Data Safety & Validation
The service implements robust safety measures including MongoDB ObjectId format validation, pet existence verification before deletion, comprehensive error handling for various failure scenarios, and clear response messages for successful and failed operations.

### Permanent Deletion Strategy
Utilizes MongoDB's `findByIdAndDelete` method to ensure complete record removal, maintaining database integrity while providing immediate confirmation of the deletion operation.

## 🌐 Service Integration

This microservice integrates seamlessly with other Shaggy Mission platform components, working alongside the Pet Registration Service for complete lifecycle management, supporting administrative dashboards with deletion capabilities, enabling adoption success tracking by removing adopted pets, and maintaining data consistency across the platform ecosystem.

## 🔒 Data Security & Safety

- **ObjectId Validation**: Ensures valid MongoDB ObjectId format
- **Existence Verification**: Confirms pet exists before deletion attempt
- **Permanent Deletion**: Complete record removal from database
- **Error Handling**: Comprehensive error management and logging
- **Authorization Ready**: Structure prepared for future authentication layers
- **Data Integrity**: Safe deletion without affecting related records

## 🗃️ Database Schema

### Pet Document Structure (Before Deletion)
```javascript
{
  _id: ObjectId,
  name: String (required),
  breed: String (optional),
  age: Number (min: 0, optional),
  healthStatus: String (enum: ['Good', 'Fair', 'Delicate'], default: 'Good'),
  description: String (optional),
  location: String (optional),
  images: [String] (array of URLs),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-updated)
}
```

### Deletion Impact
When a pet is deleted:
- **Complete Removal**: All pet data is permanently removed from the database
- **No Cascade Effects**: Related records in other services remain unaffected
- **Immediate Effect**: Deletion is processed immediately and cannot be undone
- **Clean Database**: Helps maintain optimal database performance

## 📚 API Documentation

Complete API documentation is available through Swagger UI at `/deletePets-docs` when the service is running. The documentation includes:

- Interactive endpoint testing with real pet IDs
- Comprehensive request/response examples
- Error handling scenarios and status codes
- MongoDB ObjectId format requirements
- Security considerations and best practices

## 🔧 Development

### Project Structure
```
├── config/
│   └── db.js                # MongoDB connection setup
├── controllers/
│   └── pet.controller.js    # Pet deletion logic
├── models/
│   └── pet.model.js         # Mongoose Pet schema
├── routes/
│   └── pet.routes.js        # API route definitions
├── services/
│   └── pet.service.js       # Business logic layer
├── docs/
│   └── swagger.yaml         # OpenAPI specification
└── app.js                   # Express application setup
```

### Testing the API
```bash
# Delete a pet record
curl -X DELETE "http://localhost:3008/pets/64f8b2a1c3d4e5f6a7b8c9d0"

# Expected response: {"message": "Pet deleted successfully"}

# Test with non-existent ID
curl -X DELETE "http://localhost:3008/pets/64f8b2a1c3d4e5f6a7b8c9d1"

# Expected response: {"message": "Pet not found"}
```

### Common Deletion Scenarios
- **Successful Adoption**: Remove pets that have found forever homes
- **Data Cleanup**: Remove duplicate or test records
- **Administrative Maintenance**: Clean up outdated or incorrect entries
- **Relocation**: Remove pets that have been transferred to other organizations
- **System Maintenance**: Bulk cleanup operations for database optimization

## 🔄 Deletion Workflows

### Adoption Success Process
When a pet is successfully adopted, rescue organizations can remove the pet profile from active listings, maintaining clean and current databases while celebrating successful placements.

### Administrative Cleanup
Administrators can perform routine database maintenance by removing duplicate records, cleaning up test data, correcting data entry errors, and managing database storage optimization.

### Data Management
The service supports comprehensive data lifecycle management including archival processes (future enhancement), bulk deletion operations (when integrated with batch processing), and audit trail maintenance (for compliance requirements).

## ⚠️ Important Considerations

### Data Loss Warning
- **Permanent Action**: Pet deletion is irreversible
- **Complete Removal**: All pet data is permanently lost
- **No Recovery**: Deleted records cannot be restored
- **Backup Recommended**: Consider data backup before deletion

### Best Practices
- **Verify Pet ID**: Always confirm the correct pet ID before deletion
- **Check Adoption Status**: Ensure pet has been successfully adopted
- **Document Reason**: Maintain records of why pets were deleted
- **Administrative Approval**: Consider requiring admin approval for deletions
- **Audit Logging**: Implement logging for deletion tracking (future enhancement)

## 🚀 Future Enhancements

- **Soft Delete Option**: Mark pets as deleted without permanent removal
- **Batch Deletion**: Delete multiple pets in a single operation
- **Deletion Audit Trail**: Track who deleted what and when
- **Role-Based Access**: Restrict deletion permissions to authorized users
- **Backup Integration**: Automatic backup before deletion
- **Undo Functionality**: Short-term recovery option for accidental deletions

---

<div align="center">
  <p><strong>Built with ❤️ for street dogs and cats everywhere 🐕🐱</strong></p>
  <p><em>Every successful adoption makes room for another rescue!</em></p>
  <p>📖 <a href="/deletePets-docs">View API Documentation</a></p>
</div>