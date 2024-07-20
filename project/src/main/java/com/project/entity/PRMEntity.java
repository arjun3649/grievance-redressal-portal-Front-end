package com.project.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PRMEntity 
{

	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long id;
	  private String allComplaints;
	  private String description;
	    
		public Long getId() 
		{
			return id;
		}
		public void setId(Long id) 
		{
			this.id = id;
		}
		public String getAllComplaints() 
		{
			return allComplaints;
		}
		public void setAllComplaints(String allComplaints) 
		{
			this.allComplaints = allComplaints;
		}
		public String getDescription() 
		{
			return description;
		}
		public void setDescription(String description) 
		{
			this.description = description;
		}
}
